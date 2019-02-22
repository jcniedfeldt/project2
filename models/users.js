module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    account_created: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    height: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user_pass: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    
  });
  return Users;
};
