const mongoose = require('mongoose')

const config = require('../config/dev')

const connectToMongoose = async () => {
  return await mongoose.connect(config.database.uri, {
    useNewUrlParser: true
  });
}

module.exports = { connectToMongoose };
