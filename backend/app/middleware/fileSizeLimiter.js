const removeFile = require("../helpers/removeFile")

const fileSizeLimiter = (req, res, next) => {
    if (req.imageError) {
        return next()
    }
    if (!req.file) {
        return next()
    }
    if (req.file.size > 1024 * 1024) {
        removeFile(req.file.path)
        return res.status(400).json({
            success: false,
            message: "gambar terlalu besar",
            data: "",
        })
    }
    next()
}
module.exports = fileSizeLimiter
