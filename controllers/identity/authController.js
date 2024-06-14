const authService = require("./../../services/identity/authService");
const { passwordResetMail } = require("./../../services/identity/mailerService");

exports.loginController = async (req, res, next) => {
    try {
        const token = await authService.loginService(req, res);
        res.send(token);
    } catch (err) {
        next(err);
    }
};

exports.registerController = async (req, res, next) => {
    try {
        const user = await authService.registerService(req, res, next);
        res.send(user);
    } catch (err) {
        next(err);
    }
};

exports.resetPasswordGetTokenController = async (req, res, next) => {
    try {
        // Get Token for User
        const token = await authService.resetPasswordGetTokenService(req, res, next);

        // Send email for user
        await passwordResetMail(req.body.email, token);
        await res.send(token);
    } catch (err) {
        next(err);
    }
};

exports.resetPasswordVerifyTokenController = async (req, res, next) => {
    try {
        const token = await authService.resetPasswordVerifyTokenService(req, res, next);
        res.send(token);
    } catch (err) {
        next(err);
    }
};
