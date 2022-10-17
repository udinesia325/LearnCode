const Controller = require("cores/Controller")


class ExampleController extends Controller {
  index() {
    // example call request and response
    const { request, response } = this
    this.success("hello world!")
  }
}

module.exports = ExampleController