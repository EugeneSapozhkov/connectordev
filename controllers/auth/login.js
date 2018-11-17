const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const login = ({ User }) => async (req, res, next) => {
  const { email, password } = req.body;

  if (_.isEmpty(email) || _.isEmpty(password)) {
      return res.status(400).json({ message: "Incorrect data" })
  }

  // Find use by email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  const match = await bcrypt.compare(password, user.password);


  if (match) {

    // Create JWT Payload
    const payload = {
      id: user.id,
      name: user.name,
    };

    // Sign Token
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        res.json({
          status: 200,
          token,
        })
      });
  } else {
    return res.status(400).json({ message: "Password incorrect" })
  }
};

module.exports = login;