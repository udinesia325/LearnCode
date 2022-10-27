const Express = require("express")

const app = new Express()
app.use(Express.static(__dirname + "/public"))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
exports.app = app
