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
        const users = []
        for (let i = 0; i <= 5; i++) {
            users.push({
                uid: +new Date(),
                name: faker.name.firstName(),
                photo: faker.image.unsplash.people(),
                email: faker.email,
                email_verified_at: new Date(),
            })
        }
        await queryInterface.bulkInsert("users", users)
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
