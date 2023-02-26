'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    static associate(models) {
      // define association here
      Register.belongsToMany(models.Patient, {
        through: "registerId_patientId",
        foreignKey: "registerId"
      });
      Register.belongsToMany(models.doctor, {
        through: "doctorId_Register",
        foreignKey : "registerId",
        constraints: false
      });
      Register.belongsToMany(models.doctor, {
        through: "HospitalId_Register",
        foreignKey : "registerId",
        constraints: false
      });
    }
  }
  Register.init({
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    observations: DataTypes.STRING,
    speciality: DataTypes.STRING,
    health_condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};