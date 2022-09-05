// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const shortPerMonthStatistics = async (month, year, id) => {
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: id,
        'date.month': month,
        'date.year': year
      }
    },
    {
      $group: {
        _id: '$transactionType',
        totalAmount: {
          $sum: '$amount'
        }
      }
    }
  ])
  return result
}

module.exports = shortPerMonthStatistics
