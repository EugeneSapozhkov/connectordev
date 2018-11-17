const express = require("express");

const register = require("./register");
const login = require("./login");

module.exports = (models) => {
    const api = express.Router();

    // auth controllers
    api.post("/register", register(models));
    api.post("/login", login(models));

    return api;
};