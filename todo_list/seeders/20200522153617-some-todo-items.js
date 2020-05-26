'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoitems",
      [
        {
          name: "Do Stuff",
          deadline: "now",
          important: "true",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Do other Stuff",
          deadline: "yesterday",
          important: "false",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoitems", null, {});
  }
};
