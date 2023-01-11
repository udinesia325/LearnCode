const fs = require("fs")
const removeFile = (destination) => {
    if (destination.endsWith("default.jpg")) {
        return true
    }
    try {
        fs.unlinkSync(destination)
    } catch (error) {
        console.log(error)
    }
}
module.exports = removeFile
