const express = require("express");
const users = require("../controllers/users");
const User = require("../models/User");

const models = {
  User,
};

const routersInit = () => {
  const router = express();

  router.use('/users', users(models));

  return router;
};

module.exports = routersInit;
