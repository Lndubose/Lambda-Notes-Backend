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
}); //End of GET notes

router.get('/notes/:id', (req, res) => {
  const { id } = req.params;

  db.getANote(id)
    .then(note => {
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ errorMessage: 'Id not found' });
      }
    })
    .catch(err => {
      res.status(500).json(`Server error --> ${err}`);
    });
}); //End of GET a note

router.post('/notes', requiredProperties, (req, res) => {
  const newNote = req.body;
  db.createNote(newNote)
    .then(ids => {
      res.status(201).json({ message: 'Post created', _id: ids[0] });
    })
    .catch(err => {
      res.status(500).json(`Server error --< ${err}`);
    });
}); //End of POST

router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  db.deleteNote(id)
    .then(response => {
      if (response) {
        res.status(200).json({ message: 'Note Deleted' });
      } else {
        res.status(404).json({ errorMessage: 'Id was not found.' });
      }
    })
    .catch(err => res.status(500).json(`Server error --> ${err}`));
}); //End of DELETE

router.put('/notes/:id', requiredProperties, (req, res) => {
  const { id } = req.params;
  const note = req.body;

  db.editNote(id, note)
    .then(response => {
      if (response) {
        res
          .status(200)
          .json({ message: 'Noted edited ', note: { ...req.body, _id: id } });
      } else {
        res.status(404).json({ errorMessage: 'Id not found' });
      }
    })
    .catch(err => res.status(500).json(`Server error --> ${err}`));
}); //End of PUT

module.exports = router;
