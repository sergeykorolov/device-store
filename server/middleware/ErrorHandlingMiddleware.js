const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    // является ли ошибка экземпляр ApiError
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Непредвиденная ошибка"})
}