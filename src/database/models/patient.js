'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.hasMany(models.Register, {
        foreignKey: 'patientId'

      })
    }
  }
  Patient.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    phone: DataTypes.STRING,
    identify: DataTypes.STRING,
    password: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};