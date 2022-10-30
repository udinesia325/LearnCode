const Controller = require("cores/Controller")
const { validationResult } = require("express-validator")
const models = require("models")

class LessonsController extends Controller {
    async index() {
        // example call request and response
        const { request, response } = this
        const data = await models.lessons.findAll({
            attributes: ["name", "description", "image"],
        })
        this.success(data)
    }
    async findWithMateries() {
        const { request, response } = this
        const { lesson, slug } = request.params
        const result = await models.lessons.findOne({
            attributes: ["name", "description", "created_at", "updated_at"],
            where: {
                name: lesson,
            },
            include: {
                model: models.materies,
                attributes: ["slug", "title", "content", "created_at"],
                include: {
                    model: models.users,
                    attributes: ["name", "photo"],
                },
                where: {
                    slug,
                },
            },
        })
        this.success(result)
    }
    async findLesson() {
        const { request } = this
        const data = await models.lessons.findOne({
            attributes: ["name", "image"],
            where: {
                name: request.params.lesson,
            },
            include: {
                model: models.materies,
                attributes: ["title", "slug"],
            },
        })

        this.success(data)
    }
    async createLesson() {
        const errors = validationResult(this.request)
        if (!errors.isEmpty()) {
            return this.error(errors)
        }
        const { request } = this
        const { name, description } = request.body
        const isExist = await this.existLesson(name)
        if (isExist) {
            return this.error("Lesson Telah Ada")
        }
        const data = await models.lessons.create({ name, description })
        return this.success(data, "Berhasil menambahkan lessson baru ")
    }
    async existLesson(name) {
        return (await models.lessons.findOne({
            where: {
                name,
            },
        }))
            ? true
            : false
    }
}
module.exports = LessonsController
