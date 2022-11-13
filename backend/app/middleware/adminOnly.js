const adminOnly = (req, res, next) => {
    if (req.user.role == "admin") {
        next()
    } else {
        return res.status(400).json({
            message: "unauthorized user",
        })
    }
}

module.exports = adminOnly
