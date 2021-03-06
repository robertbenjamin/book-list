const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const routes = require('./api/routes');
const { connectToMongoose } = require('./api/utils/db');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

routes(app);

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  connectToMongoose();
  console.log(`Express server listening on port ${port}`);
});
