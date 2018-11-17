const express = require("express");
const auth = require("../controllers/auth");
const users = require("../controllers/users");
const home = require("../controllers/home");

// Models
const User = require("../models/User");
const models = {
  User,
};

const routersInit = () => {
  const router = express();

  router.use('/home', home());
  router.use('/auth', auth(models));
  router.use('/users', users(models));

  return router;
};

module.exports = routersInit;