const addTransaction = require('./addTransaction')
const deleteTransaction = require('./deleteTransaction')

const transactionsController = {
  addTransaction,
  deleteTransaction
}

module.exports = transactionsController
