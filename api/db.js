const db = require('../data/config.js');

module.exports = {
  getNotes,
  createNote,
  deleteNote,
  getANote,
  editNote,
};

//Gets all notes
function getNotes() {
  return db('notes');
}

//Gets a single not from the id
function getANote(id) {
  return db('notes')
    .where({ _id: id })
    .first();
}

//Creates a new note
function createNote(note) {
  return db('notes')
    .returning('_id')
    .insert(note)
    .into('notes');
}

//Deletes a note based on id
function deleteNote(id) {
  return db('notes')
    .where({ _id: id })
    .del();
}

//Updates a notes based on id
function editNote(id, note) {
  return db('notes')
    .where({ _id: id })
    .update(note);
}
