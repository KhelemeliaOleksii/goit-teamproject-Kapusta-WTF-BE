const { TransactionModel } = require('../../models/transaction')

const findTransaction = async (id) => {
  const result = await TransactionModel.findById(id)

  return result
}

module.exports = findTransaction
