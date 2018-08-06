const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const routes = require('./api/routes')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(routes)

const port = process.env.PORT || 8000

const server = app.listen(port, () => {
  require('./api/utils/db')
  console.log(`Express server listening on port ${port}`)
})

