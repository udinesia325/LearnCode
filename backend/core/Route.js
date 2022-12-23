const Express = require("express")
const multer = require("multer")
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
const adminOnly = require("../app/middleware/adminOnly")
const fileUploader = require("../app/helpers/fileUploader")
const fileSizeLimiter = require("../app/middleware/fileSizeLimiter")
const registerValidation = require("../app/middleware/registerValidation")
const uidExist = require("../app/middleware/uidExist")
const DashboardController = require("../app/controllers/dashboard.controller")

const router = Express.Router()
class Route {
    init() {
        return [
            this.get("/", (req, res, next) =>
                new ExampleController(req, res, next).index()
            ),
            this.get(
                "/dashboard",
                (req, res, next) => new DashboardController(req, res, next)
            ),
            this.get("/materies", (req, res, next) =>
                new MateriesController(req, res, next).allMateries()
            ),
            this.post(
                "/materies",
                decodeToken,
                createMateriValidation,
                (req, res, next) =>
                    new MateriesController(req, res, next).create()
            ),
            this.get("/materies/:slug", (req, res, next) =>
                new MateriesController(req, res, next).materiWithSlug()
            ),
            this.delete(
                "/materies/:slug",
                decodeToken,
                adminOnly,
                (req, res, next) =>
                    new MateriesController(req, res, next).delete()
            ),
            this.patch(
                "/materies/:slug",
                decodeToken,
                createMateriValidation,
                (req, res, next) =>
                    new MateriesController(req, res, next).update()
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
            this.delete(
                "/lessons/:name",
                decodeToken,
                adminOnly,
                (req, res, next) =>
                    new LessonsController(req, res, next).delete()
            ),
            this.post(
                "/lessons",
                decodeToken,
                fileUploader("lessons").single("image"),
                fileSizeLimiter,
                createLessonValidation,
                (req, res, next) =>
                    new LessonsController(req, res, next).createLesson()
            ),
            this.patch(
                "/lessons/:name",
                decodeToken,
                fileUploader("lessons").single("image"),
                fileSizeLimiter,
                createLessonValidation,
                (req, res, next) =>
                    new LessonsController(req, res, next).update()
            ),
            this.post("/auth/login", loginValidation, (req, res, next) =>
                new AuthController(req, res, next).login()
            ),
            this.post(
                "/auth/register",
                fileUploader("users").single("photo"),
                fileSizeLimiter,
                registerValidation,
                (req, res, next) =>
                    new AuthController(req, res, next).register()
            ),
            this.get(
                "/auth/verify/:uid",
                decodeToken,
                adminOnly,
                uidExist,
                (req, res, next) => new AuthController(req, res, next).verify()
            ),
            this.get("/auth/users", decodeToken, adminOnly, (req, res, next) =>
                new AuthController(req, res, next).index()
            ),
            this.post("/auth/me", decodeToken, (req, res, next) => new AuthController(req, res, next).me())
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
    // eslint-disable-next-line class-methods-use-this
    patch(...args) {
        // add middleware log
        args.push(log)
        return router.patch(...args)
    }
}

exports.Route = Route
