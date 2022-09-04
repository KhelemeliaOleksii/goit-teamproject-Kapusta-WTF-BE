const asyncHandler = require('express-async-handler')

const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user
  if (!userId) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const { date } = req.query
  if (!date) {
    res.status(400)
    throw new Error(`Date ${date} is not supported`)
  }
  const currentDate = new Date(date)
  const month = currentDate.getMonth().toString()
  const year = currentDate.getFullYear().toString()
  const prevResult = await reportServises.shortPerMonthStatistics(month, year, userId)

  if (!prevResult) {
    res.status(404)
    throw new Error('error message')
  }

  const result = [
    {
      _id: 'expenses',
      totalAmount: 0
    },
    {
      _id: 'income',
      totalAmount: 0
    }
  ]

  result.forEach((value) => {
    const idx = prevResult.findIndex((item) => item._id === value._id)

    if (idx + 1) {
      value.totalAmount = prevResult[idx].totalAmount
    }
  })

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