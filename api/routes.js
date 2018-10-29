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

module.exports = router;
