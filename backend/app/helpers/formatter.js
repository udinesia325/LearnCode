/**
 * Cleaning url from query
 * @param {String} url
 */
const cleanUrl = (url) => encodeURI(url)
//url.replace(/(\?.*)|(#.*)/g, '')

module.exports = { 
  cleanUrl
}
