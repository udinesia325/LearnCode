'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thumbnail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  thumbnail.init({
    url: DataTypes.TEXT,
    materi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'thumbnail',
    underscored: true,
  });
  return thumbnail;
};