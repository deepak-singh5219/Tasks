require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const app = express();
const router = require('./routes/router');
app.use('/',router);
app.use(express.json());


module.exports = app;