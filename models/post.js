module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        lens: [1]
      }
    },
    post_time: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dest_user_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    post: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });
  return Post;
};
