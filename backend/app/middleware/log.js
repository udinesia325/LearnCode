const log = (req) => {
    const time = new Date().toLocaleString()
    console.log(`[${time}] => [${req.method}] ${req.originalUrl}`)
}

module.exports = log
