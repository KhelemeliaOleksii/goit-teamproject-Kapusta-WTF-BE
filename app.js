console.clear()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const logger = require('morgan')
const cors = require('cors')
const errorHandler = require('./helpers/errorHandler')
const transactionsRouter = require('./routes/api/transactions')
const balanceRouter = require('./routes/api/balance')
const reportRouter = require('./routes/api/report')
const authRouter = require('./routes/api/auth')
const categoriesRouter = require('./routes/api/categories')

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/api/v1', transactionsRouter)
app.use('/api/v1', balanceRouter)
app.use('/api/v1', reportRouter)
app.use('/api/v1', authRouter)
app.use('/api/v1', categoriesRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use(errorHandler)

module.exports = app
