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
        await queryInterface.bulkInsert("materies", [
            {
                user_id: 1,
                lesson_id: 1,
								slug:"usestate-dan-useeffect",
								title:"usestate dan useeffect",
                content: faker.lorem.paragraphs(4),
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                user_id: 2,
                lesson_id: 1,
								slug:"styling-component",
								title:"styling-component",
                content: faker.lorem.paragraphs(4),
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
    },
}
