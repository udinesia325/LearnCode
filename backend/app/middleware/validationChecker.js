const { validationResult } = require("express-validator")

const validationChecker = (req, res, next) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "validasi gagal",
            data: errors.array()
        })
    }
    next()
}
module.exports = validationChecker
