const asyncHandler = require('express-async-handler')
const categoryPerMonthStatistics = require('../../services/categoryPerMonthStatistics')

const controller = asyncHandler(async (req, res) => {
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
  const month = currentDate.getMonth().toString()
  const year = currentDate.getFullYear().toString()
  const type = transactionType.toString()

  const result = await categoryPerMonthStatistics(month, year, type)

  if (!result) {
    res.status(404)
    throw new Error('error message')
  }
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
