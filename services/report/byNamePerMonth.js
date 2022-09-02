// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const byNamePerMonth = async (monthValue, yearValue, category) => {
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: '62e571247f3faf7ed194473e',
        'date.month': monthValue,
        'date.year': yearValue,
        categoryId: category
      }
    }, {
      $group: {
        _id: '$description.descriptionName',
        totalAmount: {
          $sum: '$amount'
        }
      }
    }
  ])

  return result
}

module.exports = byNamePerMonth
