require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const app = express();
const router = require('./routes/router');
app.use(express.json()); // to use json inside the express application.
app.use('/',router); // used for routing


module.exports = app;