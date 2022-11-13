const { check } = require("express-validator")
const minLength = require("../helpers/minLength")

const loginValidation = [
    check("email").isEmail().withMessage("Email Tidak Valid"),
    check("password")
        .isLength({ min: 5 })
        .withMessage(minLength("password", 5)),
]
module.exports = loginValidation
