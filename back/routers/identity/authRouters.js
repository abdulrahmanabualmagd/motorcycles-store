const router = require("express").Router();
const auth = require("./../../controllers/identity/authController");
const validator = require("./../../validators/userValidators");

// stage [1] Email Verification create and send token
router.post("/register", auth.emailVerificationGetTokenController);         // create user with (email, salt, password, code) and send mail with code to verify
// stage [2] Verify Email
router.post("/verify", auth.emailVerificationVerifyTokenController);        // receive the code, search for it and activate the user account + update the phase to (2)
// stage [3] Register
router.post("/complete-registeration", auth.registerController);             // complete the registration and update the phase to (completed)


// Login
router.post("/login", validator.userLoginValidationRules(), validator.validateInputs, auth.loginController);
// Reset Get Token
router.post("/reset", validator.userResetPassValidationRules(), validator.validateInputs, auth.resetPasswordGetTokenController);
// Reset Verify Token
router.post("/reset/:token", auth.resetPasswordVerifyTokenController);

module.exports = router;
