const mongoose = require('mongoose')

const config = require('../config/dev')

const getConnection = async () => {
  return await mongoose.connect(config.database.uri, {
    useNewUrlParser: true
  });
}

const connection = getConnection();
