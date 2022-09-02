const asyncHandler = require('express-async-handler')
const transactionsService = require('../../services/transactions')

const deleteTransaction = asyncHandler(async (req, res) => {
  const { _id } = req.user
  if (!_id) {
    res.status(401)
    throw new Error('Invalid user id')
  }
  const { id } = req.params
  try {
    await transactionsService.deleteTransaction(id)
  } catch (error) {
    res.status(400)
    throw new Error('Error while deleting transaction')
  }

  res.status(200).json({
    message: 'Transaction deleted',
    code: 200,
    data: {
      id
    }
  })
})

module.exports = deleteTransaction
