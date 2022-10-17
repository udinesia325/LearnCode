require("dotenv").config()
/*
 *@param {String} env_key
 *@return {String}
 *
 *
 */
module.exports = (env_key) => {
		return process.env[env_key]
}
