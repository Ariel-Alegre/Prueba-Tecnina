'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    static associate(models) {
      Hospital.belongsToMany(models.Register, {
        through: "hospitalId_registerId",
        foreignKey : "hospitalId",
        constraints: false
      });
      Hospital.belongsToMany(models.doctor, {
        through: "doctorId_hospitalId",
        foreignKey : "hospitalId",
        constraints: false
      });
    }
  }
  Hospital.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    medical_services: DataTypes.ARRAY(DataTypes.STRING),
    identify: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};