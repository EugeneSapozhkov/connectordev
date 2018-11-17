const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../models/User");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

module.exports = passport => (
    passport.use(new JwtStrategy(opts, function (payload, done) {
        User.findOne({ id: payload.sub } , (err, user) => {

            console.log(payload);

            if (err) {
                console.log('Error Unauthorized! - 1');
                return done(err, false);
            }
            if (user) {
                console.log('Error Unauthorized! - 2');
                return done(null, user);
            } else {
                console.log('Error Unauthorized! - 3');
                return done(null, false);
            }
        });
    }))
);