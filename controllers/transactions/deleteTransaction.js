const asyncHandler = require('express-async-handler')
const transactionsService = require('../../services/transactions')
const balanceService = require('../../services/balance')
const balance = require('../../models/balance')

const deleteTransaction = asyncHandler(async (req, res) => {
  const { _id } = req.user

  if (!_id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const userId = _id.toString()
  const { id: transactionId } = req.params
  try {
    const candidateTransaction = await transactionsService.findTransaction(transactionId)
    if (!candidateTransaction) {
      throw new Error('Invalid transaction Id')
    }
    const { amount, transactionType } = candidateTransaction
    const currentBalance = await balanceService.getBalance(userId)
    // as transaction is deleted operation is inverse
    const candidateBalance = transactionType === 'expenses' ? currentBalance + amount : currentBalance - amount
    if (candidateBalance < balance.balanceLimit.min || candidateBalance > balance.balanceLimit.max) {
      throw new Error('Operation exceed limit')
    }
    await transactionsService.deleteTransaction(transactionId)
    await balanceService.updateBalance(userId, candidateBalance)
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }

  res.status(200).json({
    message: 'Transaction deleted',
    code: 200,
    data: {
      transactionId
    }
  })
})

module.exports = deleteTransaction
