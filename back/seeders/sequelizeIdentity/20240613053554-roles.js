"use strict";
const { v4 : uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("roles", [
            {
                id: uuidv4(),
                name: "admin",
                description: "Admin role", 
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                name: "user",
                description: "User role", 
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("roles", null, {});
    },
};
