"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserRole extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UserRole.init(
        {
            userId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "User",
                    key: "id",
                },
            },
            roleId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "Role",
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "UserRole",
            primaryKey: ["userId", "roleId"],
            tableName: "users_roles"
        }
    );
    return UserRole;
};
