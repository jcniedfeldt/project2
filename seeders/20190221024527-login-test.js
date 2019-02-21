"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    Sequelize; //TODO remove later
    return queryInterface.bulkInsert("logins", [
      {
        username: "brando_test",
        userpass: "IRock"
      },
      {
        username: "nlibre_test",
        userpass: "stretchypants"
      },
      {
        username: "brotherkisser_test",
        userpass: "iloveluke"
      },
      {
        username: "bigbooty_test",
        userpass: "youknowyoulikeit"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    queryInterface; //TODO remove later
    Sequelize; //TODO remove later
  }
};
