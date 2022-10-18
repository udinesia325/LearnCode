require('module-alias/register')

const device = require('express-device');
const { Route } = require('cores/Route')
const { app } = require('./app')
const { repo } = require('./config')
const env = require("helpers/env")
const port = env("PORT") || 4000

class App extends Route {
    init() {
        
        app.use(device.capture());
        // register router
        app.use('/api', super.init())
        
        app.use('*',(req,res) =>{
            res.send({
                message:'check our github for more info',
                github : repo.github
            })
        })
        
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    }
}

new App().init()
