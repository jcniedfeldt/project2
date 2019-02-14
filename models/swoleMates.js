module.exports = function (sequelize, DataTypes) {
  var swoleMates = sequelize.define("swoleMates", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    your_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    height: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    goals: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lastWorkout: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },

  });
  return swoleMates;
};
