const setTransaction = require('./setTransaction')
const deleteTransaction = require('./deleteTransaction')

const transactionsController = {
  setTransaction,
  deleteTransaction
}

module.exports = transactionsController
