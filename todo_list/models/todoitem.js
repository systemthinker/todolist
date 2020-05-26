'use strict';
module.exports = (sequelize, DataTypes) => {
  const todoitem = sequelize.define('todoitem', {
    name: DataTypes.STRING,
    deadline: DataTypes.STRING,
    important: DataTypes.BOOLEAN,
  }, {});
  todoitem.associate = function(models) {
    // associations can be defined here
  };
  return todoitem;
};