"use strict"
const { Model } = require("sequelize")
const {timestamps} = require("helpers/underscore_timestamp")
module.exports = (sequelize, DataTypes) => {
    class thumbnails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    thumbnails.init(
        {
            url: DataTypes.TEXT,
            materi_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "thumbnails",
            underscored: true,
						...timestamps
        }
    )
    return thumbnails
}
