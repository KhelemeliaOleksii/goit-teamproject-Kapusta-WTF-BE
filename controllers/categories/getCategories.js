const asyncHandler = require('express-async-handler')
const categoriesServises = require('../../services/categories')

const getCategories = asyncHandler(async (req, res) => {
  const result = await categoriesServises()

  res.status(200)
    .json({
      message: 'Success',
      code: 200,
      data: {
        result
      }
    })
})

module.exports = getCategories
