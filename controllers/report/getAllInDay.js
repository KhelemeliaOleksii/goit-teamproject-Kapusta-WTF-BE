const asyncHandler = require('express-async-handler')
const reportServises = require('../../services/report')

const controller = asyncHandler(async (req, res) => {
  const { date } = req.query
  if (!date) {
    res.status(400)
    throw new Error(`Date ${date} is not supported`)
  }
  const currentDate = new Date(date)
  const day = currentDate.getDate().toString()
  const month = currentDate.getMonth().toString()
  const year = currentDate.getFullYear().toString()

  const result = await reportServises.allInDay(day, month, year)

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
