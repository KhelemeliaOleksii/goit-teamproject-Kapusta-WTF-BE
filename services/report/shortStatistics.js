// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const shortStatistics = async (type) => {
  const date = new Date()
  const year = date.getFullYear().toString()
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: '62e571247f3faf7ed194473e',
        'date.year': year,
        transactionType: type
      }
    },
    {
      $group: {
        _id: '$date.month',
        totalAmount: {
          $sum: '$amount'
        }
      }
    },
    {
      $sort: {
        _id: 1
      }
    }
  ])
  return result
}

module.exports = shortStatistics
