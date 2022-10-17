/**
 * Chapter trim for get chapter slug and remove unnecessary path
 * @param {String} chapterEndpoint
 */
const chapterTrim = (chapterEndpoint) => ((chapterEndpoint) ? chapterEndpoint.split('ch/')[1].replace(/\//g, '') : '')

/**
 * Manga trim for get manga slug and remove unnecessary path
 * @param {String} mangaEndpoint
 */
const mangaTrim = (mangaEndpoint) => ((mangaEndpoint) ? mangaEndpoint.split('manga/')[1].replace(/\//g, '') : '')

/**
 * Cleaning url from query
 * @param {String} url
 */
const cleanUrl = (url) => encodeURI(url)
//url.replace(/(\?.*)|(#.*)/g, '')

module.exports = { cleanUrl, mangaTrim, chapterTrim }
