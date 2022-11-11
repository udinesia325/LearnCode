const { check } = require("express-validator")
const minLength = require("../helpers/minLength")

const createMateriValidation = [
    check("lesson_id").isNumeric().withMessage("id lesson harus angka"),
    check("title").isLength({ min: 3 }).withMessage(minLength("title", 3)),
    check("content")
        .isLength({ min: 40 })
        .withMessage(minLength("content", 40)),
]
module.exports = createMateriValidation
