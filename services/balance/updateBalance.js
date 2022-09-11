const { BalanceModel } = require('../../models/balance')

const updateBalance = async (userId, newBalance) => {
  const result = await BalanceModel.findOneAndUpdate({ userId }, { currentBalance: newBalance })

  return result
}

module.exports = updateBalance
