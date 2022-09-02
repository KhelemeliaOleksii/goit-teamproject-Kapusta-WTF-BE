const createBalance = require('./createBalance')
const updateBalance = require('../balance/updateBalance')
const getBalance = require('../balance/getBalance')

const balanceService = {
  createBalance,
  updateBalance,
  getBalance
}

module.exports = balanceService
