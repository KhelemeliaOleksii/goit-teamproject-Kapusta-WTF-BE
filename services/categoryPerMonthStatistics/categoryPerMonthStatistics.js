// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const categoryPerMonthStatistics = async (monthValue, yearValue) => {
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
        _id: '$categoryId',
        totalAmount: {
          $sum: '$amount'
        }
      }
    },
    {
      $sort: {
        totalAmount: -1
      }
    }
  ])

  return result
}

module.exports = categoryPerMonthStatistics
