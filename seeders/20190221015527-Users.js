'use strict';

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
    return queryInterface.bulkInsert('Users', [{
      first_name: "Randall",
      last_name: "Jackson",
      birthday="1989-10-05",
      height=72.0,
      weight=180,
      username="brando_test"
    },
    {
      first_name: "Nacho",
      last_name: "Libre",
      birthday="2000-02-28",
      height=72.0,
      weight=195,
      username="nlibre_test"
    },
    {
      first_name: "Leia",
      last_name: "Skywalker",
      birthday="1997-05-15",
      height=60.0,
      weight=120,
      username="brotherkisser_test"
    },
    {
      first_name: "Your",
      last_name: "Mom",
      birthday="1939-05-15",
      height=36.0,
      weight=310,
      username="bigbooty"
    },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users',{username:"*_test"});
  }
};
