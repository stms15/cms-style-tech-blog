const { Comment } = require("../models");

const commentData = [
  {
    contents: "This is a test comment.",
    user_id: 2,
    post_id: 1,
  },
  {
    contents: "This is another comment.",
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
