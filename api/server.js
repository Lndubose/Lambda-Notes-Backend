const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const Routes = require('./routes.js');

const server = express();

server.use(express.json(), helmet(), cors());
server.use('/api', Routes);

module.exports = server;
