const { BalanceModel } = require('../../models/balance')

const getBalance = async (userId) => {
  const { currentBalance } = await BalanceModel.findOne({ userId })

  return currentBalance
}

module.exports = getBalance
