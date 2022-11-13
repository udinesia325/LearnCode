const Controller = require("cores/Controller")
const { validationResult } = require("express-validator")
const models = require("models")
const generateSlug = require("../helpers/generateSlug")
const slugify = require("slugify")
const genSlug = require("../helpers/genSlug")

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
        if (!data) {
            return this.error("", "materies not found", 404)
        }
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
    async delete() {
        const { slug } = this.request.params
        try {
            await models.materies.destroy({
                where: { slug },
            })
            this.success("", "berhasil di hapus", 200)
        } catch (err) {
            console.log(err)
            this.error("internal server error")
        }
    }
    async update() {
        const { slug } = this.request.params
        const oldData = await models.materies.findOne({
            attributes: ["title", "id"],
            where: {
                slug,
            },
            include: {
                model: models.users,
                attributes: ["name"],
            },
        })
        if (!oldData) {
            return this.error("", "materies not found", 404)
        }
        const { title, content, lesson_id } = this.request.body
        const newData = { ...oldData, title, content, lesson_id }
        //jika title berubah maka bikin slug baru
        if (oldData.title == title) {
            newData.slug = genSlug(title)
        } else {
            newData.slug = await generateSlug(title)
        }
        try {
            await models.materies.update(
                { ...newData },
                {
                    where: {
                        id: oldData.id,
                    },
                }
            )
            this.success("", "berhasil di update")
        } catch (err) {
            console.log(err)
            this.error("", "internal server error", 500)
        }
    }
}

module.exports = MateriesController
