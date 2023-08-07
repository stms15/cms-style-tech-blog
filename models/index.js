// import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Users can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// Comment belongs to Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// Posts can have many Comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Users can have many Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comment };
