const { baseURL } = require("constants/url")

/**
 * Cleaning url from query
 * @param {String} url
 * @return {String}
 */
const cleanUrl = (url) => encodeURI(url)

/**
 * Parse string to url
 * @param {String} text
 * @return {String}
 */
const parseURL = (text) => {
  const exp = /^(\/)?(\w+(|\/|(\.*\.)|\w+)+)/
  let match = text.match(exp)
  let [, isFolder, path, extensionFile] = match
  
  return match ? `${ baseURL + (isFolder ? "" : "/") + path }` : text
}

module.exports = { 
  cleanUrl,
  parseURL
}
