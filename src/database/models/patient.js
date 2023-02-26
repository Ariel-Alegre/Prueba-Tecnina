'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.belongsToMany(models.Register, {
        foreignKey: "patientId",
        through:"registerId_patientId",
        constraints: false

      })

      Patient.belongsToMany(models.doctor, {
        foreignKey: "patientId",
        through:"doctorId_patientId",
        constraints: false
        
      });
    }
  }
  Patient.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    birthdate: DataTypes.TEXT,
    phone: DataTypes.STRING,
    identify: DataTypes.STRING,
    password: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};