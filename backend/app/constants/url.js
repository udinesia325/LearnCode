const env = require("helpers/env")

const baseURL = `${ env("PROTOCOL", "http") }://${ env("HOST", "localhost") }:${ env("PORT", 3000) }`


module.exports = {
  baseURL
}