const express = require("express");
const mongoose = require("mongoose");

const {
  users,
  profile,
  posts
} = require("./routes/api");

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send("Hello"));

// App Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`))