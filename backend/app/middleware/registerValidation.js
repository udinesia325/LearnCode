const { check, body } = require("express-validator")
const models = require("models")
const minLength = require("../helpers/minLength")

const registerValidation = [
    check("name").isLength({ min: 4 }).withMessage(minLength("Nama", 5)),
    check("email")
        .isEmail()
        .withMessage("Email Tidak Valid")
        .custom(async (value) => {
            const user = await models.users.findOne({
                where: {
                    email: value,
                },
            })
            // jika sudah ada user maka lempar error
            if (user) {
                throw new Error("email telah digunakan")
            }
            // jika tidak maka lolos
            return true
        }),
    body("password").isLength({ min: 5 }),
    body("passwordConfirmation").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Password confirmation tidak sama dengan password")
        }

        // Indicates the success of this synchronous custom validator
        return true
    }),
]
module.exports = registerValidation
