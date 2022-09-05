const asyncHandler = require('express-async-handler')
const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user
  if (!userId) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const { transactionType } = req.query

  const testType = ['income', 'expenses'].find(item => item === transactionType)
  if (!testType) {
    res.status(400)
    throw new Error(`Transaction type ${transactionType} is not supported`)
  }
  const result = await reportServises.shortStatistics(transactionType, userId)
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
