const asyncHandler = require('express-async-handler')

const getCurrent = asyncHandler(async (req, res) => {
  const { email } = req.user
  res.json({
    email
  })
})

module.exports = getCurrent
