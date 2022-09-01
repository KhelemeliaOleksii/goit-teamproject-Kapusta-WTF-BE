const createTransaction = require('./createTransaction')
const deleteTransaction = require('./deleteTransaction')

const transactionsService = {
  createTransaction,
  deleteTransaction
}

module.exports = transactionsService
