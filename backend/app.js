const Express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")
const app = new Express()
app.use(Express.static(__dirname + "/public"))
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
exports.app = app


// pastikan direktori untuk upload lessons dan user ada
const lessons = fs.existsSync(path.join(__dirname, "public", "images", "lessons"))
const users = fs.existsSync(path.join(__dirname, "public", "images", "users"))

try {
    if (lessons == false) {
        fs.mkdirSync(path.join(__dirname, "public", "images", "lessons"))
    }

    if (users == false) {
        fs.mkdirSync(path.join(__dirname, "public", "images", "users"))
    }
} catch (error) {
    coneole.log(error)
}
