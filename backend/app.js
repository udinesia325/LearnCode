const Express = require('express')

const app = new Express()
app.use(Express.static(__dirname + '/public'));
exports.app = app
