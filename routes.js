const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.json({
    content: 'Hello world!'
  })
})

router.get('*', (req, res) => {
  return res.status(404).send('Uh oh, 404')
})

module.exports = router
