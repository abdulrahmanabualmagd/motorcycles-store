const { dbIdentity } = require("./../../config/database");
const { hashPassword, verifyPassword } = require("./../../utils/passwordUtils");
const { createToken } = require("./../../utils/tokenUtils");
const emailTokensUtils = require("./../../utils/emailTokensUtils");
const { createCustomer } = require("./../application/customerService");

// ------------------------------- [ Register ] -------------------------------
/*
    # step 1    (email, password, salt, verificationCode)
        - check for email ducplication
        - hash password and get the hashed password and result 
        - generate verification token 
        - create user and add check the role before going to further (not save user before the check)
        - create the user and associate with user role (default)
*/
exports.emailVerificationGetTokenService = async (email, password) => {
    try {
        const db = await dbIdentity;

        // save user (email, password, salt, status(inactive)) add role and so on

        // Check email duplication
        const emailduplicationResult = await db.User.repo.getOne({ where: { email: email } });
        if (emailduplicationResult) throw new Error("Dublicated Email");

        // Hash Password
        const { hashedPassword, salt } = await hashPassword(password);

        // create the emailverification token
        const emailVerificationToken = emailTokensUtils.passwordResetToken();

        // Create User
        const userData = {
            email: email,
            passwordHash: hashedPassword,
            salt,
            verificationCode: emailVerificationToken,
        };

        // Check for roles before saving the user in the database
        const role = await db.Role.repo.getOne({
            where: {
                name: "user",
            },
        });

        if (!role) throw Error("No roles found!");

        // Insert User to Database
        const user = await db.User.repo.create(userData);

        // Add Role to User
        await db.User.repo.addAssociations(user, role, "Role");

        // Return results
        return { user, emailVerificationToken };
    } catch (err) {
        throw err;
    }
};

/*
    # step 2 
        - update status to (active) account + update the phase to (2)
*/
exports.emailVerificationVerifyTokenService = async (token) => {
    try {
        const db = await dbIdentity;
        const user = await db.User.repo.getOne({
            where: {
                verificationCode: token,
            },
        });

        // check the user
        if (!user) throw Error("User not found");

        // check if the user is already activated his account
        if (user.status === "active" || user.status === "suspend") throw Error("User Account is Already Activated");

        // check the verifcation code
        if (user.verificationCode !== token) throw Error("Invalid Token");

        // activate account
        user.status = "active";
        // update stage
        user.stage = "2";
        user.save();

        return { message: "Account Activated Successfully!", user };
    } catch (err) {
        throw err;
    }
};

/*
    # step 3 
        - complete the registration and add the phone, nationalId and full name (validation on the application level for these fields)
*/
exports.registerService = async (data) => {
    // Init Database
    const db = await dbIdentity; // Because all indexes are returning a promise (all are async)

    const { email, nationalId, phone, fullName } = data;

    try {
        // Check email duplication
        const user = await db.User.repo.getOne({ where: { email } });
        if (!user) throw new Error("User not found");

        // Make sure that user account is activated
        if (user.status !== "active") throw Error("You must activate your account First");

        user.nationalId = nationalId;
        user.phone = phone;
        user.fullName = fullName;

        await user.save();

        // Create customer in the application database
        const customer = await createCustomer({
            userId: user.id,
        });

        // Return User & Customer
        return { user, customer };
    } catch (err) {
        throw err;
    }
};

// ------------------------------- [ Login ] -------------------------------
/*
    The user Account must be activated to be able to login 
*/
exports.loginService = async (data) => {
    try {
        // Init Database
        const db = await dbIdentity; // Because all indexes are returning a promise (all are async)

        // Collect Data
        const { email, password } = data;

        // Get User by Email
        const user = await db.User.repo.getOne({
            where: { email: email },
            include: [
                {
                    model: db.Role,
                    as: "roles",
                },
            ],
        });
        if (!user) throw new Error("User Not Found");

        // check the user status first (must be activa account to be able to log in)
        switch (user.status) {
            case "inactive":
                throw Error("Please Activate Your Account");
            case "suspend":
                throw Error("Your Account Suspended");
        }

        // Hash Password
        if (!(await verifyPassword(password, user.salt, user.passwordHash))) throw new Error("Wrong Password");

        // Prepare All Roles Names
        const roles = [];
        if (user.roles.length > 0) {
            for (let item of user.roles) {
                roles.push(item.name);
            }
        }

        // Prepare Payload
        const payload = {
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            nationalId: user.nationalId,
            roles: roles,
        };

        // Create Token
        const token = createToken(payload);

        return token;
    } catch (err) {
        throw err;
    }
};

// ------------------------------- [ Rest Password (Generate) ] -------------------------------
exports.resetPasswordGetTokenService = async (req, res, next) => {
    try {
        // Init Database
        const db = await dbIdentity; // Because all indexes are returning a promise (all are async)

        // Collect Data
        const { email } = req.body;

        if (!email) throw new Error("Missing required Field");

        // Get user
        const user = await db.User.repo.getOne({ where: { email: email } });

        // Check if user exists
        if (!user) throw new Error("Email Not Found");

        // Get user's reset tokens (if it exist, get the most recent to check for timeout)
        const userRecentPasswordResetToken = await db.PasswordResetToken.repo.getOne({
            where: {
                userId: user.id,
            },
            order: [["createdAt", "DESC"]],
        });

        // Check reset token
        if (userRecentPasswordResetToken) {
            // Check availability to create another one if it has passed the specified time
            const result = emailTokensUtils.checkRecentToken(userRecentPasswordResetToken.createdAt);
            if (result > 0)
                throw new Error(`You have to wait ${result / (60 * 1000)} minutes before Generating another token`);
        }

        // Create String Token object
        const passwordResetTokenObject = {
            token: emailTokensUtils.passwordResetToken(), // Default Bytes[64]
            userId: user.id,
            expiresAt: new Date(Date.now() + 1000 * 60 * process.env.RESET_PASSWORD_EXPIRATION),
        };

        // Store the token in database
        db.PasswordResetToken.repo.create(passwordResetTokenObject);

        return passwordResetTokenObject.token;
    } catch (err) {
        throw err;
    }
};

// ------------------------------- [ Rest Password (Verify) ] -------------------------------
exports.resetPasswordVerifyTokenService = async (req, res, next) => {
    try {
        // Init Database
        const db = await dbIdentity; // Because all indexes are returning a promise (all are async)

        // Collect Data
        const { token } = req.params;
        const { password } = req.body;

        // Check Data
        if (!token || !password) throw new Error("Token or Password not found");

        // Get Token
        const userToken = await db.PasswordResetToken.repo.getOne({
            where: { token: token },
            order: [["createdAt", "DESC"]],
            include: {
                model: db.User,
                as: "User",
            },
        });

        // Check Existance Token
        if (!userToken) throw new Error("Token Not Found");

        // Check Token Expiration
        if (emailTokensUtils.checkExpiration(userToken.expiresAt)) throw new Error("Token Expired");

        // Hash Password
        const { hashedPassword, salt } = await hashPassword(password);

        // Update User Password, Salt, UpdatedAt
        userToken.User.passwordHash = hashedPassword;
        userToken.User.salt = salt;
        userToken.User.updatedAt = Date.now();

        // Save Updated Valued for User
        await userToken.User.save();

        // Destroy Used Token
        userToken.destroy();

        return "Password Updated Successfully!";
    } catch (err) {
        throw err;
    }
};
