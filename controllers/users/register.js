const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const validateRegisterInput = require('../../validation/register');

const register = ({ User }) => async (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    errors.email = 'Email already exists';
    return res.status(400).json(errors);
  }

  const avatar = gravatar.url(req.body.email, {
    s: '200', // Size
    r: 'pg',  // Rating
    d: 'mm',  // Default
  });

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;

      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    })
  })
};

module.exports = register;