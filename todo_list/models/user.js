"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
    },
    {
      // freezeTableName: true,
    }
  );
  User.associate = function (models) {
    User.hasMany(models.todoList)
  };
  return User;
};