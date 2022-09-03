const TransactionModel = require('../../models/transaction/transactionModel')

const categoryPerMonthStatistics = async (month, year, type, id) => {
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: id,
        'date.month': month,
        'date.year': year,
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
