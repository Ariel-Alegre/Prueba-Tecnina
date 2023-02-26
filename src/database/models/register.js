'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    static associate(models) {
      // define association here
      
    }
  }
  Register.init({
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    speciality: DataTypes.STRING,
    estadodesalud: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};