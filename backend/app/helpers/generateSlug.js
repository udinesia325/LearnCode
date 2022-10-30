const { Op } = require("sequelize")
const slugify = require("slugify")
const models = require("models")
const genSlug = (string) => {
    const config = {
        trim: true,
        lower: true,
    }
    return slugify(string, config)
}
const regex = new RegExp("-{1}[0-9]+$")
const generateSlug = async (string) => {
    let slug = genSlug(string)
    //cek apakah sudah ada yg benar benar sama
    const data = await models.materies.findOne({
        where: {
            slug,
        },
    })

    if (data?.slug == slug) {
        slug += "-1"
    }

    // ambil yang mirip dan generate suffix nya
    const { rows, count } = await models.materies.findAndCountAll({
        attributes: ["slug"],
        where: {
            slug: {
                [Op.startsWith]: slug,
            },
        },
    })
    let i = 0
    if (count == 0) {
        return slug
    }
    while (rows.find((data) => data.slug == slug)) {
        if (slug.match(regex)) {
            slug = slug.replace(regex, "-" + ++i)
        } else {
            slug += "-1"
        }
    }
    return slug
}

module.exports = generateSlug
