"use strict"
const { Model } = require("sequelize")
const { timestamps } = require("helpers/underscore_timestamp")
module.exports = (sequelize, DataTypes) => {
    class lessons extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    lessons.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "lessons",
            underscored: true,
            ...timestamps,
        }
    )
    return lessons
}
