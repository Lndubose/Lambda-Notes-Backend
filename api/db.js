const express = require('express');

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getNotes,
  createNote,
  deleteNote,
};

function getNotes() {
  return db('notes');
}

function createNote(note) {
  return db('notes')
    .insert(note)
    .into('notes');
}

function deleteNote(id) {
  return db('notes')
    .where({ _id: id })
    .del();
}
