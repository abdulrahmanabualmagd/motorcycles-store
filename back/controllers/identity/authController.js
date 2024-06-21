const authService = require("./../../services/identity/authService");
const mailer = require("./../../services/identity/mailerService");

exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Check Data
        if (!email || !password) throw new Error("Missing required fields");
        const token = await authService.loginService({email, password});
        res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};

exports.emailVerificationGetTokenController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) throw Error("Missing requirements");

        // Get verification token the created token
        const { user, emailVerificationToken } = await authService.emailVerificationGetTokenService(email, password);

        // send the token to the specified email
        const result = await mailer.emailVerificationMail(user.email, emailVerificationToken);
        res.status(200).json({ result, emailVerificationToken });
    } catch (err) {
        next(err);
    }
};

exports.emailVerificationVerifyTokenController = async (req, res, next) => {
    try {
        // Check fo the token
        const { token: token } = req.body;
        if (!token) throw Error("Missing Requirements");

        // Verify Token
        const result = await authService.emailVerificationVerifyTokenService(token);
        res.status(200).json({ result });
    } catch (err) {
        next(err);
    }
};

exports.registerController = async (req, res, next) => {
    try {
        // Check input data
        const { email, nationalId, phone, fullName } = req.body;
        if (!email || !nationalId || !phone || !fullName) throw Error("Missing requirements");

        const result = await authService.registerService({ email, nationalId, phone, fullName });
        res.status(201).json({ result });
    } catch (err) {
        next(err);
    }
};

exports.resetPasswordGetTokenController = async (req, res, next) => {
    try {
        // Get Token for User
        const token = await authService.resetPasswordGetTokenService(req, res, next);

        // Send email for user
        await mailer.passwordResetMail(req.body.email, token);

        res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};

exports.resetPasswordVerifyTokenController = async (req, res, next) => {
    try {
        const token = await authService.resetPasswordVerifyTokenService(req, res, next);
        res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};
