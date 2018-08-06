const mongoose = require('mongoose')
const { Schema } = mongoose

const BookSchema = new Schema({
  title: String,
  author: String
})

module.exports = mongoose.model('Book', BookSchema)
