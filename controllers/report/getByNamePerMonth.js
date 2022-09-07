const asyncHandler = require('express-async-handler')
const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user
  if (!userId) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const { date, category } = req.query
  if (!date) {
    res.status(400)
    throw new Error(`Date ${date} is not supported`)
  }
  if (!category) {
    res.status(400)
    throw new Error(`Category ${category} is not supported`)
  }

  const currentDate = new Date(date)
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const result = await reportServises.byNamePerMonth(month, year, category, userId)

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
