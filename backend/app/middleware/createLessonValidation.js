const { check } = require("express-validator")
const minLength = require("../helpers/minLength")
const models = "models"
const createLessonValidation = [
    check("name").isLength({ min: 2 }).withMessage(minLength("nama", 2)),
    check("description")
        .isLength({ min: 5 })
        .withMessage(minLength("description", 5)),
]

module.exports = createLessonValidation
