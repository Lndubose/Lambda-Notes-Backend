const express = require('express');
const db = require('./db.js');

const router = express();

//==== MIDDLEWARE ====
const requiredProperties = (req, res, next) => {
  const { title, textBody } = req.body;
  if (title && textBody) {
    next();
  } else {
    res.status(400).json({ errorMessage: 'Missing title or textBody' });
  }
};

// ==== ENDPOINTS ====
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
}); //End of GET

router.post('/notes', requiredProperties, (req, res) => {
  const newNote = req.body;

  db.createNote(newNote)
    .then(ids => {
      res.status(201).json({ newNoteId: ids[0] });
    })
    .catch(err => {
      res.status(500).json(`Server error --< ${err}`);
    });
}); //End of Post

module.exports = router;
