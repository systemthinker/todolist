'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
    "todolists",
    [
      {
        name: "List One",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
   )



  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todolists", null, {});
  }
};
