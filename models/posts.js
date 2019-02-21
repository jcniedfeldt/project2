module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("posts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        lens: [1]
      }
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dest_username: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    updatedAt: {type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
  });
  return Post;
};
