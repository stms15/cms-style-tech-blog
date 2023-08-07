const { Post } = require("../models");

const postData = [
  {
    title: "Test Post",
    contents: "This is my first post.",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
