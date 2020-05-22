'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING.unique(),
    phone: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};