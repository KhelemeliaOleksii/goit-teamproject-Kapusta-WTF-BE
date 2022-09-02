// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const categoryPerMonthStatistics = async (monthValue, yearValue, type) => {
  // console.log(typeof monthValue, monthValue)
  // console.log(typeof yearValue, yearValue)
  // console.log(typeof type, type)

  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: '62e571247f3faf7ed194473e',
        'date.month': monthValue,
        'date.year': yearValue,
        transactionType: type
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
