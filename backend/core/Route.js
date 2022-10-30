const Express = require("express")
const log = require("middleware/log")

/*
 * example require controller
 */
const ExampleController = require("controllers/example.controller.js")
const LessonsController = require("controllers/lessons.controller.js")
const MateriesController = require("controllers/materies.controller.js")
const createLessonValidation = require("../app/middleware/createLessonValidation")
const AuthController = require("controllers/auth.controller")
const loginValidation = require("../app/middleware/loginValidation")
const createMateriValidation = require("../app/middleware/createMateriValidation")
const decodeToken = require("../app/middleware/decodeToken")

const router = Express.Router()
class Route {
    init() {
        return [
            this.get("/", (req, res, next) =>
                new ExampleController(req, res, next).index()
            ),
            this.get("/materies", (req, res, next) =>
                new MateriesController(req, res, next).allMateries()
            ),
            this.post("/materies", decodeToken ,createMateriValidation, (req, res, next) =>
                new MateriesController(req, res, next).create()
            ),
            this.get("/materies/:slug", (req, res, next) =>
                new MateriesController(req, res, next).materiWithSlug()
            ),
            this.get("/lessons/:lesson", (req, res, next) =>
                new LessonsController(req, res, next).findLesson()
            ),
            this.get("/lessons/:lesson/:slug", (req, res, next) =>
                new LessonsController(req, res, next).findWithMateries()
            ),
            this.get("/lessons", (req, res, next) =>
                new LessonsController(req, res, next).index()
            ),
            this.post("/lesson", createLessonValidation, (req, res, next) =>
                new LessonsController(req, res, next).createLesson()
            ),
            this.post("/auth/login", loginValidation, (req, res, next) =>
                new AuthController(req, res, next).login()
            ),
        ]
    }

    // eslint-disable-next-line class-methods-use-this
    get(...args) {
        // add middleware log
        args.push(log)
        return router.get(...args)
    }
    // eslint-disable-next-line class-methods-use-this
    post(...args) {
        // add middleware log
        args.push(log)
        return router.post(...args)
    }

    // eslint-disable-next-line class-methods-use-this
    delete(...args) {
        // add middleware log
        args.push(log)
        return router.delete(...args)
    }
}

exports.Route = Route
