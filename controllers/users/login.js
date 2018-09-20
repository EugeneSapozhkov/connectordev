const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../../config");

const login = ({ User }) => async (req, res, next) => {
  const { email, password } = req.body;

  // Find use by email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ email: "User not found" })
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {

    // Create JWT Payload
    const payload = {
      id: user.id,
      name: user.name,
      avatar: user.avatar
    };

    // Sign Token
    jwt.sign(
      payload,
      secretOrKey,
      { expiresIn: 3600 },
      (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
        })
      });
  } else {
    return res.status(400).json({ password: "Password incorrect" })
  }
};

module.exports = login;