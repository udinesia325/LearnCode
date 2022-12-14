"use strict"

const { faker } = require("@faker-js/faker/locale/id_ID")
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
        await queryInterface.bulkInsert("thumbnails", [
            {
                url: faker.image.unsplash.technology(),
                materi_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                url: faker.image.unsplash.technology(),
                materi_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
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

        await queryInterface.bulkDelete("thumbnails", null, {})
    },
}
