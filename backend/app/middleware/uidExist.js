const { param } = require("express-validator")
const models = require("models")
const uidExist = [
    param("uid").custom(async (value) => {
        const user = await models.users.findOne({
            where: {
                uid: value,
            },
        })
        // jika tidak ada user maka lempar error
        if (!user) {
            throw new Error("uid user tidak ada")
        }
        // jika tidak maka lolos
        return true
    }),
]

module.exports = uidExist
