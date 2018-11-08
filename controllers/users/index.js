const express = require("express");
const passport = require("passport");

const get = require("./get");
const register = require("./register");
const login = require("./login");
const getUsers = require("./getUsers");

module.exports = (models) => {
    const api = express.Router();

    // auth controllers
    api.post("/register", register(models));
    api.post("/login", login(models));

    // return user list
    // TODO need add pagination
    api.get("/", getUsers(models));

    // return user
    api.get("/me", passport.authenticate('jwt', {session: false}), get());

    return api;
};