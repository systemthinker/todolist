"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
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
  user.associate = function (models) {
    user.hasMany(models.todoList, {  foreignKey: 'userId',})
  };
  return user;
};