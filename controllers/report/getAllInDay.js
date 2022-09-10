const asyncHandler = require('express-async-handler')
const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const userId = _id.toString()

  const { date } = req.query
  if (!date) {
    res.status(400)
    throw new Error(`Date ${date} is not supported`)
  }
  const currentDate = new Date(date)
  const day = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const result = await reportServises.allInDay(day, month, year, userId)

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
