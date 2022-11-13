const Controller = require("cores/Controller")
const bcryptjs = require("bcryptjs")
const models = require("models")
const { validationResult } = require("express-validator")
const createToken = require("../helpers/createToken")
const jwt = require("jsonwebtoken")
const removeFile = require("../helpers/removeFile")
const { Op } = require("sequelize")
require("dotenv").config()
class AuthController extends Controller {
    async login() {
        const { request } = this
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return this.error(errors)
        }
        const { email, password } = request.body
        const user = await models.users.findOne({
            where: {
                email,
            },
            include: {
                attributes: ["name"],
                model: models.roles,
            },
        })
        if (!user) {
            return this.error("", "email atau password salah", 400)
        }
        const isVerify = await bcryptjs.compare(password, user.password)
        if (!isVerify) {
            return this.error("", "email atau password salah", 400)
        }
        const token = await createToken({
            id: user.id,
            name: user.name,
            role: user.role.name,
        })
        return this.success({ name: user.name, token }, "berhasil login")
    }
    async register() {
        const { request } = this
        //cek apalah ada error pada gambsr
        if (request.imageError) {
            return this.error("", request.imageError, 400)
        }
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            if (request.file) {
                removeFile(request.file.path)
            }
            return this.error(errors)
        }
        const { name, email, password } = request.body
        const uid = Math.random(+new Date())
            .toString(16)
            .slice(-7)
        const photo = request.file?.filename || "default.jpg"
        try {
            const encryptedPassword = bcryptjs.hashSync(password, 10)
            await models.users.create({
                name,
                uid,
                email,
                password: encryptedPassword,
                photo,
                role_id: 2,
            })
            return this.success("", "registrasi berhasil!", 201)
        } catch (err) {
            // hapus file jika terupload
            if (request.file) {
                removeFile(request.file.path)
            }
            console.log("register error", err)
            return this.error("", "internal server error")
        }
    }
    async verify() {
        const { uid } = this.request.params
        const errors = validationResult(this.request)
        if (!errors.isEmpty()) {
            return this.error(errors)
        }
        try {
            await models.users.update(
                {
                    email_verified_at: new Date(),
                },
                {
                    where: { uid },
                }
            )
            return this.success("", "user berhasil terverifikasi")
        } catch (err) {
            console.log("verification failed", err)
            return this.error("", "internal server error")
        }
    }
    async index() {
        try {
            const { rows, count } = await models.users.findAndCountAll({
                attributes: ["name", "uid", "photo", "email"],
                where: {
                    [Op.not]: {
                        role_id: 1,
                    },
                },
            })

            return this.success({
                total: count,
                users: rows,
            })
        } catch (err) {
            console.log("find all user error", err)
            return this.error("", "internal server error")
        }
    }
}

module.exports = AuthController
