const asyncHandler = require('express-async-handler')
const {
  transactionValidation
} = require('../../models/transaction')
const transactionsService = require('../../services/transactions')

const income = asyncHandler(async (req, res) => {
  const { _id } = req.user
  if (!_id) {
    res.status(401)
    throw new Error('Invalid user id')
  }
  const { error } = transactionValidation.validateTransaction(req.body)
  if (error) {
    res.status(400)
    throw new Error(error.message)
  }
  const transaction = { ...req.body, userId: _id }
  try {
    await transactionsService.createTransaction(transaction)
  } catch (error) {
    res.status(400)
    throw new Error('Error while creating transaction')
  }

  res.status(201).json({
    message: 'Success',
    code: 201,
    data: {
      transaction
    }
  })
})

module.exports = income
