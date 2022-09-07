const asyncHandler = require('express-async-handler')
const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const userId = _id.toString()

  const { date, transactionType } = req.query
  if (!date) {
    res.status(400)
    throw new Error(`Date ${date} is not supported`)
  }

  const testType = ['income', 'expenses'].find(item => item === transactionType)

  if (!testType) {
    res.status(400)
    throw new Error(`Transaction type ${transactionType} is not supported`)
  }
  const currentDate = new Date(date)
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const type = transactionType.toString()

  const result = await reportServises.categoryPerMonthStatistics(month, year, type, userId)

  res.status(200)
    .json({
      message: 'Success',
      code: 200,
      data: {
        result
      }
    })
})

module.exports = controller
