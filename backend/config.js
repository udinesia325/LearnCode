const pjson = require('./package.json')
const author = pjson.author
const version = pjson.version
const appName = pjson.name
const description = pjson.description
const repo = pjson.repository

module.exports = {
  author,
  repo
}