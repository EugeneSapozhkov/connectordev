const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');

const setAllowHeader = require('./utils/setAllowHeaders');
const api = require("./api");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Set allow headers
app.use((req, res, next) => {
    setAllowHeader(req, res, next);
});

require("./config/passport")(passport);

// App Routes
app.use('/api', api());

app.listen(process.env.AP_PORT, () => console.log(`server running on port ${process.env.AP_PORT}`))