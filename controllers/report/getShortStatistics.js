const asyncHandler = require('express-async-handler')
const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { transactionType } = req.query

  const id = '62e571247f3faf7ed194473e'
  const testType = ['income', 'expenses'].find(item => item === transactionType)
  if (!testType) {
    res.status(400)
    throw new Error(`Transaction type ${transactionType} is not supported`)
  }
  const result = await reportServises.shortStatistics(transactionType, id)
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
