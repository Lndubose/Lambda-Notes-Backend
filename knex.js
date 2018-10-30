const knex = require('knex');
const environment = process.env.ENVIRONMENT || 'development';
const knexConfig = require('./knexfile')[environment];
module.exports = knex(knexConfig);
