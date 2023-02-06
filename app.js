const express = require('express');
const app = express();
const RotaProdut = require('./routes/produtos')


app.use('/produtos',RotaProdut)


module.exports = app;