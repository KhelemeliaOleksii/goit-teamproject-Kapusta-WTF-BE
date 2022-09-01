const asyncHandler = require('express-async-handler')
const shortPerMounthStatisticsServises = require('../../services/shortPerMounthStatistics')

const controller = asyncHandler(async (req, res) => {
  const { month, year } = req.params

  const result = await shortPerMounthStatisticsServises(month, year)

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
