const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: String,
  author: String,
  dateFinished: Date
});

module.exports = mongoose.model('Book', BookSchema);
