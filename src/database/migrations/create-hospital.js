'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hospitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      medical_services: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,

      },
      identify: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hospitals');
  }
};