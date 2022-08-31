const { UserBalanceModel } = require('../../models/balance')

const updateBalance = async (amount) => {
  const result = await UserBalanceModel.findByIdAndUpdate(amount)

  return result
}

module.exports = updateBalance
