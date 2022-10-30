const Controller = require("cores/Controller")
const bcryptjs = require("bcryptjs")
const models = require("models")
const { validationResult } = require("express-validator")
const createToken = require("../helpers/createToken")
const jwt = require("jsonwebtoken")
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
        })
        if (!user) {
            return this.error("", "email atau password salah", 400)
        }
        const isVerify = await bcryptjs.compare(password, user.password)
        if (!isVerify) {
            return this.error("", "email atau password salah", 400)
        }
        const token = await createToken({ id: user.id, name: user.name })
        return this.success({ name: user.name, token }, "berhasil login")
    }
}

module.exports = AuthController
