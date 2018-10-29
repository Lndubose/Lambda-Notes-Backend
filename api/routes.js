const express = require('express');
const db = require('./db.js');

const router = express();

router.get('/notes', (req, res) => {
  db.getNotes()
    .then(notes => {
      if (notes.length) {
        res.status(200).json(notes);
      } else {
        res.status(200).json({ message: 'No notes' });
      }
    })
    .catch(err => res.status(500).json(`Server error --> ${err}`));
});

router.post('/notes', (req, res) => {
  const newNote = req.body;

  db.createNote(newNote)
    .then(ids => {
      res.status(201).json({ newNoteId: ids[0] });
    })
    .catch(err => {
      if (err.errno === 19) {
        res.status(400).json({ errorMessage: 'Missing title or textBody' });
      } else {
        res.status(500).json(`Server error --< ${err}`);
      }
    });
});

module.exports = router;
