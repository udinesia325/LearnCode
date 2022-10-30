const Controller = require("cores/Controller")
const { validationResult } = require("express-validator")
const models = require("models")
const generateSlug = require("../helpers/generateSlug")

class MateriesController extends Controller {
    async allMateries() {
        const data = await models.materies.findAll({
            attributes: ["slug"],
            include: {
                model: models.lessons,
                attributes: ["name"],
            },
        })
        this.success(data)
    }
    async materiWithSlug() {
        const { slug } = this.request.params
        const data = await models.materies.findOne({
            attributes: ["title", "slug", "content", "created_at"],
            where: {
                slug,
            },
            include: {
                model: models.users,
                attributes: ["name"],
            },
        })
        this.success(data)
    }
    async create() {
        const request = this.request
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return this.error(errors, "failed", 400)
        }
        const { title, content, lesson_id } = request.body
        const user_id = request.user.id
        const slug = await generateSlug(title)
        try {
            const newMateri = await models.materies.create({
                user_id,
                lesson_id,
                slug,
                title,
                content,
            })
            this.success(newMateri, "berhasil menambahkan materi baru", 201)
        } catch (err) {
            console.log(err)
            this.error("internal server error")
        }
        //this.success({ user_id, title, slug, lesson_id, content })
    }
}

module.exports = MateriesController
