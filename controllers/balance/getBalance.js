const asyncHandler = require('express-async-handler')

const balanceService = require('../../services/balance')

const getBalance = asyncHandler(async (req, res) => {
  const { _id } = req.user
  if (!_id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const userId = _id.toString()

  try {
    const balance = await balanceService.getBalance(userId)
    res.status(201).json({
      message: 'Success',
      code: 201,
      data: {
        balance
      }
    })
  } catch (error) {
    res.status(201).json({
      message: 'Success',
      code: 201,
      data: {
        balance: null
      }
    })
  }
})

module.exports = getBalance
