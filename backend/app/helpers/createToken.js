const jwt = require("jsonwebtoken")
require("dotenv").config()
const createToken = async (data) => {
    try {
        const token = await jwt.sign(data, process.env.JWT_KEY, {
            expiresIn: "1d",
        })
				
        return token
    } catch (err) {
        console.log(err)
        return false
    }
}
module.exports = createToken
