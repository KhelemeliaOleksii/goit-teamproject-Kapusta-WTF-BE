// const Example = require('../../models/example');

const TransactionModel = require('../../models/transaction/transactionModel')

const byNamePerMonth = async (month, year, category, id) => {
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: id,
        'date.month': month,
        'date.year': year,
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
