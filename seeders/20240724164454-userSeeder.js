'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = [];
    [...Array(10).keys()].forEach(element => {
        users.push({
          "name": faker.person.firstName(),
          "email": faker.internet.email(),
          "password": faker.internet.password(),
          "status": faker.helpers.enumValue({active: 'active', inactive: 'inactive'})
        });
    });

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
