"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            uid: {
                type: Sequelize.TEXT,
            },
            name: {
                type: Sequelize.STRING,
            },
            photo: {
                type: Sequelize.TEXT,
            },
            email: {
                type: Sequelize.TEXT,
            },
            password: {
                type: Sequelize.STRING,
            },
            email_verified_at: {
                type: Sequelize.DATE,
            },
            role_id: {
                type: Sequelize.INTEGER,
            },
            created_at: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users")
    },
}
