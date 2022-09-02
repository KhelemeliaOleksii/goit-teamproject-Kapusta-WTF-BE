const asyncHandler = require('express-async-handler')
const shortPerMonthStatisticsServises = require('../../services/shortPerMonthStatistics')

const controller = asyncHandler(async (req, res) => {
  const { month, year } = req.params

  const result = await shortPerMonthStatisticsServises(month, year)

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
