const multer = require("multer")
const path = require("path")

/**
 *
 *@param {string} destination - tempat menyimpan gambar di public pilih antara lessons | users
 *
 *
 */
const fileUploader = (destination) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(
                null,
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "public",
                    "images",
                    destination
                )
            )
        },
        filename: function (req, file, cb) {
            const uniqueSuffix =
                Date.now() + "-" + Math.round(Math.random() * 1e9)
            cb(
                null,
                file.fieldname +
                    "-" +
                    uniqueSuffix +
                    path.extname(file.originalname)
            )
        },
    })
    const fileFilter = function (req, file, callback) {
        var ext = path.extname(file.originalname)
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            req.imageError = "hanya boleh mengupload gambar"
            return callback(null, false)
        }
        callback(null, true)
    }

    return multer({
        storage,
        fileFilter,
    })
}
module.exports = fileUploader
