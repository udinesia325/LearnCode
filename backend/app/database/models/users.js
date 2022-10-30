"use strict"
const { Model } = require("sequelize")
const { timestamps } = require("helpers/underscore_timestamp")
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    users.init(
        {
            uid: DataTypes.STRING,
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            photo: DataTypes.STRING,
            email: DataTypes.STRING,
            email_verified_at: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "users",
            underscored: true,
            ...timestamps,
        }
    )
    return users
}
