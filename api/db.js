const express = require('express');

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getNotes,
};

function getNotes() {
  return db('messages');
}
