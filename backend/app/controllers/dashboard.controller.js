const models = require("models")
const Controller = require("cores/Controller")

class DashboardController extends Controller {
    #users = 0
    #materies = 0
    #lessons = 0
    constructor(...args) {
        super(...args)
        this.data()
            .then(() => {
                return this.success({
                    users: this.#users,
                    materies: this.#materies,
                    lessons: this.#lessons,
                })
            })
            .catch(() => this.error("", "internal server error"))
    }
    async data() {
        this.#users = await models.users.count()
        this.#materies = await models.materies.count()
        this.#lessons = await models.lessons.count()
    }
}

module.exports = DashboardController
