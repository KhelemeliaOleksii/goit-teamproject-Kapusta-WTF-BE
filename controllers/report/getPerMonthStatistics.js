const asyncHandler = require('express-async-handler')

const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user

  if (!userId) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const userIdStr = userId.toString()

  const { date } = req.query
  if (!date) {
    res.status(400)
    throw new Error(`Date ${date} is not supported`)
  }
  const currentDate = new Date(date)
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const prevResult = await reportServises.shortPerMonthStatistics(month, year, userIdStr)

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
  const typeID = typeof userIdStr
  res.status(200)
    .json({
      message: 'Success',
      code: 200,
      data: {
        result,
        typeID,
        userIdStr
      }
    })
})

module.exports = controller
