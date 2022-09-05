const TransactionModel = require('../../models/transaction/transactionModel')

const byNamePerMonth = async (day, month, year, id) => {
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: id,
        'date.day': day,
        'date.month': month,
        'date.year': year
      }
    },
    {
      $project: {
        userId: 0,
        createdAt: 0,
        updatedAt: 0
      }
    }
  ])

  return result
}

module.exports = byNamePerMonth
