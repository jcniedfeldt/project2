module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("logins", {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    userpass: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    createdAt: {type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: {type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  });
  return Login;
};
