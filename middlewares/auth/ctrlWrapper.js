const asyncHandler = require('express-async-handler')

const ctrlWrapper = (ctrl) => {
  const func = asyncHandler(async (req, res, next) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  })
  return func
}

module.exports = ctrlWrapper
