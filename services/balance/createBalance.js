const { BalanceModel } = require('../../models/balance')

const createBalance = async (balance) => {
  const result = await BalanceModel.create(balance)

  return result
}

module.exports = createBalance
