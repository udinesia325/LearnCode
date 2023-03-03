const env = require("../../helpers/env")

module.exports = {
    development: {
        username: env("DB_USERNAME", "root"),
        password: env("DB_PASSWORD", ""),
        database: env("DB_NAME", "learncode_backend"),
        host: env("DB_HOST", "localhost"),
        dialect: env("DB_DRIVER", "mysql"),
    },
    test: {
        username: env("DB_USERNAME", "root"),
        password: env("DB_PASSWORD", ""),
        database: env("DB_NAME", "learncode_backend"),
        host: env("DB_HOST", "localhost"),
        dialect: env("DB_DRIVER", "mysql"),
    },
    production: {
        username: env("DB_USERNAME"),
        password: env("DB_PASSWORD", ""),
        database: env("DB_NAME"),
        host: env("DB_HOST"),
        dialect: env("DB_DRIVER", "mysql"),
    }
}
