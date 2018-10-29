const express = require('express');

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getNotes,
  createNote,
  deleteNote,
  getANote,
  editNote,
};

function getNotes() {
  return db('notes');
}

function getANote(id) {
  return db('notes')
    .where({ _id: id })
    .first();
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

function editNote(id, note) {
  return db('notes')
    .where({ _id: id })
    .update(note);
}
