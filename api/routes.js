const express = require('express')
const router = express.Router()

const BookController = require('./controllers/book')

module.exports = app => {
  app.use('/books', BookController)

  app.get('*', (req, res) => {
    return res.status(404).send('Uh oh, 404')
  })
}


