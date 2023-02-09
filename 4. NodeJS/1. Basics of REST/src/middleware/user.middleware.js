const UserSchema = require("../model/user.model");
const AppError = require("../helper/AppError");

const validateUserPayload = (req, res, next) => {
    try {
        const { body } = req;
        // Check schema
        UserSchema.parse(body);
        next();
    } catch (err) {
        next(
            new AppError({
                statusCode: 503,
                message: err.flatten().fieldErrors,
            })
        );
    }
};

module.exports = { validateUserPayload };
