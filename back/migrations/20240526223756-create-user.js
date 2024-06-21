"use strict";

const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
                primaryKey: true,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                    notEmpty: true,
                },
            },
            verificationCode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            stage: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "1",
                validate: {
                    isIn: [["1", "2", "completed"]],
                },
            },
            passwordHash: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            fullName: {
                type: Sequelize.STRING,
                validate: {
                    notEmpty: true,
                    min: 3,
                    max: 15,
                },
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                validate: {
                    is: /^[0-9]+$/i,
                },
            },
            nationalId: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                validate: {
                    notEmpty: true,
                },
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "inactive",
                validate: {
                    isIn: [["active", "inactive", "suspend"]],
                },
            },
            salt: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        });
    },
    async down(queryInterface, Sequelize, uuidv4) {
        await queryInterface.dropTable("users");
    },
};
