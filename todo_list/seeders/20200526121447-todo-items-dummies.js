'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
    "todoItems",
    [
      {
        name: "stuff",
        todoListId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "idling",
        todoListId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nose-picking",
        todoListId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
   )



  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  }
};
