const Controller = require("cores/Controller")
const { validationResult } = require("express-validator")
const models = require("models")
const removeFile = require("../helpers/removeFile")
const path = require("path")

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
        const { request, response } = this
        //cek apalah ada error pada gambsr
        if (request.imageError) {
            return this.error("", request.imageError, 400)
        }
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            removeFile(request.file.path)
            return this.error(errors)
        }
        //  console.log(request.file)
        const { name, description } = request.body
        const image = request.file?.filename || "default.jpg"
        const isExist = await this.existLesson(name)
        if (isExist) {
            if (request.file) {
                removeFile(request.file.path)
            }
            return this.error("Lesson Telah Ada")
        }
        try {
            const data = await models.lessons.create({
                name,
                description,
                image,
            })
            return this.success(data, "Berhasil menambahkan lessson baru ")
        } catch (err) {
            if (request.file) {
                removeFile(request.file.path)
            }
            console.log("create lessons error", e)
            return this.error("", "internal server error")
        }
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
    async delete() {
        const { name } = this.request.params
        if (!name) return this.error("", "nama lesson tidak ada !")
        try {
            const oldData = await models.lessons.findOne({
                where: { name },
            })
            if (!oldData) return this.error("", "lesson tidak ada")
            await models.lessons.destroy({
                where: { name },
            })
            ;("../../public/images/lessons")
            removeFile(
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "public",
                    "images",
                    "lessons",
                    oldData.image
                )
            )
            return this.success("", "berhasil di hapus")
        } catch (err) {
            console.log("delete error", err)
            return this.error("", "internal server error", 500)
        }
    }
    async update() {
        const { request, response } = this
        if (request.imageError) {
            return this.error("", request.imageError, 400)
        }
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            removeFile(request.file.path)
            return this.error(errors)
        }
        //  console.log(request.file)
        const { name } = request.params
        const oldData = await models.lessons.findOne({
            where: {
                name,
            },
        })
        if (!oldData) {
            // jika gak ada data lama maka hapus file yv terupload
            if (request.file) {
                removeFile(request.file.path)
            }
            return this.error("", "lesson tidak ada", 404)
        }
        let image = oldData.image
        // jika ada file maka timpa yang lama
        if (request.file) {
            image = request.file.filename
        }
        // jika name lesson diganti maka cek apakah ada yang duplikat
        if (oldData.name != request.body.name) {
            if (await this.existLesson(request.body.name)) {
                // hapus gambar yg terupload
                if (request.file) {
                    removeFile(request.file.path)
                }
                return this.error("", "lesson sudah ada", 400)
            }
        }
        try {
            await models.lessons.update(
                {
                    image,
                    name: request.body.name,
                    description: request.body.description,
                },
                {
                    where: { name },
                }
            )

            // hapus gambar lama
            removeFile(
                path.join(
                    __dirname,
                    "..",
                    "..",
                    "public",
                    "images",
                    "lessons",
                    oldData.image
                )
            )
            return this.success("", "berhasil di update")
        } catch (err) {
            console.log("update error", err)
            if (request.file) {
                removeFile(request.file.path)
            }
            return this.error("", "internal server error", 500)
        }
    }
}
module.exports = LessonsController
