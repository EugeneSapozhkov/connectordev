const express = require("express");
const passport = require("passport");
const get = require("./get");
const register = require("./register");
const login = require("./login");

module.exports = (models) => {
  const api = express.Router();

  api.post("/register", register(models));
  api.post("/login", login(models));
  api.get("/me", passport.authenticate('jwt', {session: false}), get());

  return api;
};