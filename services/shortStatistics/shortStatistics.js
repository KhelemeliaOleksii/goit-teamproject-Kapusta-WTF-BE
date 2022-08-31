// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const shortStatistics = async (type) => {
  const date = new Date()
  const year = date.getFullYear()
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: 2,
        'date.year': year,
        transactionType: type
      }
    }, {
      $group: {
        _id: '$date.month',
        totalAmaunt: {
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
