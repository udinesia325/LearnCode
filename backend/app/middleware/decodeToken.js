require("dotenv").config()
const jwt = require("jsonwebtoken")

const decodeToken = async (req, res, next) => {
    const credential = req.headers.authorization
    if (!credential) return res.status(400).json(unauthorizedResponse())
    const [type, token] = credential.split(" ")
    if (type !== "Bearer") {
        return res.status(400).json(unauthorizedResponse())
    }
    try {
        const user = await jwt.verify(token, process.env.JWT_KEY)
        //isi data user ke req
        req.user = user
        next()
    } catch (err) {
        return res.status(400).json(unauthorizedResponse())
    }
}
const unauthorizedResponse = () => {
    return {
        success: "false",
        message: "unauthorized user",
        data: "",
    }
}
module.exports = decodeToken
