"use strict"

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
        await queryInterface.bulkInsert("lessons", [
            {
                name: "reactjs",
                description: "framework for building user interface",
                image: "images/lessons/react.png",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "html",
                description: "hypertext markup language",
                image: "images/lessons/html.png",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "javascript",
                description: "Fullstack Programming Language",
                image: "images/lessons/javascript.png",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "laravel",
                description: "Framework for php artisan",
                image: "images/lessons/laravel.png",
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
        await queryInterface.bulkDelete("lessons", null, {})
    },
}
