const asyncHandler = require('express-async-handler')
const {
  balanceValidation
} = require('../../models/balance')
const balanceService = require('../../services/balance')

const income = asyncHandler(async (req, res) => {
  const { _id } = req.user
  if (!_id) {
    res.status(401)
    throw new Error('Invalid user id')
  }
  const { error } = balanceValidation.validateBalance(req.body)
  if (error) {
    res.status(400)
    throw new Error(error.message)
  }
  const balance = { ...req.body, userId: _id }
  try {
    await balanceService.createBalance(balance)
  } catch (error) {
    res.status(400)
    throw new Error('Error while creating user balance')
  }

  res.status(201).json({
    message: 'Success',
    code: 201,
    data: {
      balance
    }
  })
})

module.exports = income
