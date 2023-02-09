const ErrorHandler = (err, req, res, next) => {
    console.log("----------------------");
    console.log(err);
    console.log("----------------------");
    return res.status(err.statusCode).json({
        message: err.message,
    });
};

module.exports = ErrorHandler;
