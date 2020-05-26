'use strict';
module.exports = (sequelize, DataTypes) => {
  const todoItem = sequelize.define('todoItem', {
    name: DataTypes.STRING,
    deadline: DataTypes.STRING,
    important: DataTypes.BOOLEAN,
  }, {
    // freezeTableName: true,
  });
  todoItem.associate = function(models) {
    todoItem.belongsTo(models.todoList)
  };
  return todoItem;
};