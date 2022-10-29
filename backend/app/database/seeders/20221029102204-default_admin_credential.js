"use strict"
const {faker} = require("@faker-js/faker/locale/id_ID")
const bcryptjs = require("bcryptjs")
require("dotenv").config()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const salt = await bcryptjs.genSalt(10)
        const password = await bcryptjs.hash(
            process.env.DEFAULT_ADMIN_PASSWORD,
            salt
        )
        await queryInterface.bulkInsert("users", [
            {
                uid: +new Date(),
                name: process.env.DEFAULT_ADMIN_USERNAME,
                password: password,
                role_id: 1,
                photo: faker.image.unsplash.people(),
                email: process.env.DEFAULT_ADMIN_EMAIL,
                email_verified_at: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
}
