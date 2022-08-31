console.clear()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

// імпорт вашого роутера
const exampleRouter = require('./routes/api/example')
const reportRouter = require('./routes/api/reportRouter')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.use(logger(formatsLogger))

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(
  express.urlencoded({
    extended: false
  })
)

// місце для підключення вашого роутера
app.use('/api/v1', exampleRouter)
app.use('/api/v1', reportRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error' } = err
  res.status(status).json({ message })
})

module.exports = app
