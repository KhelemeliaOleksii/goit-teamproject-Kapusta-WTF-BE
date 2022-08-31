const { TransactionModel } = require('../../models/transaction')

const createTransaction = async (transaction) => {
  const result = await TransactionModel.create(transaction)

  return result
}

module.exports = createTransaction
