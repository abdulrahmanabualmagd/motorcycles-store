"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("role_permissions", []);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("role_permissions", null, {});
    },
};
