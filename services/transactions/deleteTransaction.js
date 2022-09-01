const { TransactionModel } = require('../../models/transaction')

const deleteTransaction = async (id) => {
  const result = await TransactionModel.findByIdAndRemove(id)

  return result
}

module.exports = deleteTransaction
