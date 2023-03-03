const { validationResult } = require("express-validator")
const removeFile = require("../helpers/removeFile")

const validationChecker = (req, res, next) => {
        if (req.imageError) {
                return this.error("", req.imageError, 400)
        }

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
                // hapus gambar yang terupload
                if (req.file) {
                        removeFile(req.file.path)
                }
                return res.status(400).json({
                        success: false,
                        message: "validasi gagal",
                        data: errors.array()
                })
        }
        next()
}
module.exports = validationChecker
