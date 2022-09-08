const asyncHandler = require('express-async-handler')
const {
  transactionValidation
} = require('../../models/transaction')
const transactionsService = require('../../services/transactions')
const balanceService = require('../../services/balance')
const balance = require('../../models/balance')

const income = asyncHandler(async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  // const userId = _id.toString()
  const userId = _id


  const { error } = transactionValidation.validateTransaction(req.body)
  if (error) {
    res.status(400)
    throw new Error(error.message)
  }
  const transaction = { ...req.body, userId }
  const { transactionType, amount } = req.body
  try {
    const currentBalance = await balanceService.getBalance(userId)
    const candidateBalance = transactionType === 'expenses' ? currentBalance - amount : currentBalance + amount
    if (candidateBalance < balance.balanceLimit.min || candidateBalance > balance.balanceLimit.max) {
      res.status(409)
      throw new Error('Operation exceed limit')
    }
    await transactionsService.createTransaction(transaction)
    await balanceService.updateBalance(userId, candidateBalance)
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }

  res.status(201).json({
    message: 'Success',
    code: 201,
    data: {
      transaction: req.body,
    }
  })
})

module.exports = income
