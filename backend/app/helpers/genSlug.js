const slugify = require("slugify")
const genSlug = (string) => {
    const config = {
        trim: true,
        lower: true,
    }
    return slugify(string, config)
}
module.exports = genSlug
