const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const { mongoURI, port } = require("./config");
const {
  users,
  profile,
  posts
} = require("./routes/api");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// App Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(port, () => console.log(`server running on port ${port}`))