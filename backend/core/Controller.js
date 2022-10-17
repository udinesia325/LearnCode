const { cleanUrl } = require('helpers/formatter');

class Controller {
    constructor(req, res, next) {
        this.response = res
        this.request = req

        next()
    }

    /**
     * Success Response
     * @param {JSON} data
     * @param {String} message
     * @param {Number} statusCode
     */
    success(data, message = 'success', statusCode = 200) {
        const { response } = this
        const obj = {}
        obj.success = true
        obj.message = message
        obj.data = data

        response.status(statusCode).json(obj)
    }

    /**
     * Failed Response
     * @param {JSON} data
     * @param {String} message
     * @param {Number} statusCode
     */
    error(data, message = 'failed', statusCode = 500) {
        const { response } = this
        const obj = {}
        obj.success = false
        obj.message = message
        obj.data = data

        response.status(statusCode).json(obj)
    }
    /*
    * raw image response
    * @param (Strjng) url [encode]
    * @param Number) status
    */
    raw(url, statusCode = 200) {
      const { response } = this
      response.status(statusCode).sendFile(url)
    }
    
    getBaseUrl() {
      const { request } = this
      
      const baseUrlResult = cleanUrl(request.protocol + '://' + request.get('host'))
      return baseUrlResult
    }
    
    unknownError(message = 'failed', statusCode = 500){
      const { response } = this
      obj.success = false
      obj.message = message
      response.status(statusCode).json(obj)
    }
}

module.exports = Controller
