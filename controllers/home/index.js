const express = require("express");

module.exports = () => {
  const api = express.Router();

  api.get("/", (req, res) => res.send("home page works"));

  return api;
};