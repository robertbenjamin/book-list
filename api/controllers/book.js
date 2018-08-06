const Book =  require('../models/book')

exports.list = async (req, res) => {
  try {
    const books = await Book.find()
    return res.json(books)
  }
  catch(e) {
    res.status(422).send(e.errors)
  }
}

exports.get = async (req, res) => {
  const id = req.params.id

  try {
    const book = await Book.findById(id)

    if (!book) return res.sendStatus(404)
    return res.json(book)
  }
  catch(e) {
    res.status(422).send(e.errors)
  }
}

exports.post = async (req, res) => {
  const data = req.body

  try {
    const book = await Book.create(data)
    return res.json(book)
  }
  catch(e) {
    res.status(500).send(e.errors)
  }
}

exports.put = async (req, res) => {
  const id = req.params.id
  const data = req.body

  try {
    const book = await Book.findByIdAndUpdate(id, data, {
      new: true
    })

    return res.json(book)
  }
  catch(e) {
    res.status(422).send(e.errors)
  }
}

exports.delete = async (req, res) => {
  const id = req.params.id

  try {
    const book = await Book.findByIdAndDelete(id)

    if (!book) return res.sendStatus(404)
    res.sendStatus(204)
  }
  catch(e) {
    res.status(422).send(e.errors)
  }
}

module.exports = exports
