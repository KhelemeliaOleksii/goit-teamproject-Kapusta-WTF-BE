// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const shortPerMonthStatistics = async (month, year, id) => {
  // console.log(typeof monthValue)
  // console.log(typeof yearValue)
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
  // console.log(result)
  return result
}

module.exports = shortPerMonthStatistics
