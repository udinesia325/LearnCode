const fs = require("fs")
const removeFile = (destination) => {
    if (destination.endsWith("default.jpg")) {
        return true
    }
    fs.unlinkSync(destination)
}
module.exports = removeFile
