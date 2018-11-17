const express = require("express");
const passport = require("passport");

const me = require("./me");
const users = require("./users");

module.exports = (models) => {
    const api = express.Router();

    // return user list
    // TODO need add pagination
    api.get("/", users(models));

    // return user
    api.get("/me", passport.authenticate('jwt', { session: false }), me());

    return api;
};