const express = require("express");
const passport = require("passport");

module.exports = () => {
  const api = express.Router();

  api.get("/", (req, res) => res.send("home page works"));

  return api;
};