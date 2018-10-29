const express = require('express');
const db = require('./db.js');

const router = express();

router.get('/notes', (req, res) => {
  db.getNotes()
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json(`Server error --> ${err}`));
});

module.exports = router;
