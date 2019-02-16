module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("login", {
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user_pass: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });
  return Login;
};
