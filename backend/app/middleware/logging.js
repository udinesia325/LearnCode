const log = (req) => {
    const time = new Date().toLocaleString()
    console.log(`[${time}] => ${req.originalUrl}`)
}

module.exports = { log }
