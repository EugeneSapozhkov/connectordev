const express = require("express");
const users = require("../controllers/users");
const home = require("../controllers/home");
const User = require("../models/User");

const models = {
  User,
};

const routersInit = () => {
  const router = express();

  router.use('/users', users(models));
  router.use('/home', home());

  return router;
};

module.exports = routersInit;