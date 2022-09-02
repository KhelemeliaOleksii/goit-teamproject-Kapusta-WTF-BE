// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const shortPerMonthStatistics = async (monthValue, yearValue) => {
  // console.log(typeof monthValue)
  // console.log(typeof yearValue)
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: '62e571247f3faf7ed194473e',
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
  // console.log(result)
  return result
}

module.exports = shortPerMonthStatistics
