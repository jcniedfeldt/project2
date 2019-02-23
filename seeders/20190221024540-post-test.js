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
    return queryInterface.bulkInsert("posts", [
      {
        createdAt: "2019-02-11 10:40:39",
        username: "brando_test",
        post: "I'm Awesome."
      },
      {
        createdAt: "2019-02-09 11:45:34",
        username: "nlibre_test",
        post:
          "Sometimes, as a man, you wear stetchy pants in your room. Iz for fun."
      },
      {
        createdAt: "2019-02-10 11:45:34",
        username: "nlibre_test",
        post: "Little hug, big kiss."
      },
      {
        createdAt: "2019-02-02 10:40:39",
        username: "brotherkisser_test",
        post: "Incest. Need I say more?"
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
