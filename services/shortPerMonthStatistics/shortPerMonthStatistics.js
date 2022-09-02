// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const shortPerMonthStatistics = async (monthValue, yearValue) => {
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: 2,
        'date.month': monthValue,
        'date.year': yearValue
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
