'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor extends Model {

    static associate(models) {
      doctor.belongsToMany(models.Register, {
        through: "doctorId_Register",
        foreignKey : "doctorId",
        constraints: false
      });
      doctor.belongsToMany(models.Hospital, {
        through: "doctorId_hospitalId",
        foreignKey : "doctorId",
        constraints: false
      });
    }
  }
  doctor.init({
    name: DataTypes.STRING,
    identify: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'doctor',
  });
  return doctor;
};