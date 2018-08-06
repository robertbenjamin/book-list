const express = require('express')
const router = express.Router()

const Book = require('./controllers/book')

// router.get('/', Book.list)

router.get('/books', Book.list)
router.get('/books/:id', Book.get)
router.post('/books', Book.post)
router.put('/books/:id', Book.put)
router.delete('/books/:id', Book.delete)


router.get('*', (req, res) => {
  return res.status(404).send('Uh oh, 404')
})

module.exports = router
