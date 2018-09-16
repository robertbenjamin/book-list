const express = require('express')
const router = express.Router()

const Book =  require('../models/book')

router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  }
  catch (e) {
    res.status(422).send(e.errors);
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);

    if (!book) return res.sendStatus(404);
    return res.json(book);
  }
  catch (e) {
    res.status(422).send(e.errors);
  }
});

router.post('', async (req, res) => {
  const data = req.body;

  try {
    const book = await Book.create(data);
    return res.json(book);
  }
  catch (e) {
    res.status(500).send(e.errors);
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const book = await Book.findByIdAndUpdate(id, data, {
      new: true
    })

    return res.json(book);
  }
  catch (e) {
    res.status(422).send(e.errors);
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) return res.sendStatus(404);
    res.json(book);
  }
  catch (e) {
    res.status(422).send(e.errors);
  }
})

module.exports = router;
