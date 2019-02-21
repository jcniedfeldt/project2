module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });
  return Users;
};
