// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const shortStatistics = async (type, id) => {
  const date = new Date()
  const year = date.getFullYear()
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: id,
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
