const Controller = require("cores/Controller")
const models = require("models")

class LessonsController extends Controller {
    async index() {
        // example call request and response
        const { request, response } = this
        const data = await models.lessons.findAll({
            attributes: ["name", "description"],
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
        const data = await models.lessons.findAll({
            attributes: ["name"],
            where: {
                name: request.params.lesson,
            },
            include: {
                model: models.materies,
                attributes: ["title", "slug"],
            },
        })

        console.log(this)
        this.success(data)
    }
}

module.exports = LessonsController
