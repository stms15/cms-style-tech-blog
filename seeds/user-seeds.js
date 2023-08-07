const { User } = require("../models");

const userData = [
  {
    username: "sarah-test",
    password: "testPassword",
  },
  {
    username: "test-2",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
