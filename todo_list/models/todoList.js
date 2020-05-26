'use strict';
module.exports = (sequelize, DataTypes) => {
  const todoList = sequelize.define('todoList', {
    name: DataTypes.STRING
  }, {
    // freezeTableName: true,
  });
  todoList.associate = function(models) {
    todoList.belongsTo(models.user)
  };
  todoList.associate = function(models) {
    todoList.hasMany(models.todoItem)
  };
  return todoList;
};