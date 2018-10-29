const helmet = require('helmet');
const express = require('express');
const Routes = require('./routes.js');

const server = express();

server.use(express.json(), helmet());
server.use('/api', Routes);

module.exports = server;
