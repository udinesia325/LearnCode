const Express = require("express")
const cors = require("cors")
const app = new Express()
app.use(Express.static(__dirname + "/public"))
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
exports.app = app
