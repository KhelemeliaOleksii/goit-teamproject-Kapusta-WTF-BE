const TransactionModel = require('../../models/transaction/transactionModel')

const byNamePerMonth = async (day, month, year, id) => {
  console.log(typeof day, day)
  console.log(typeof month, month)
  console.log(typeof year, year)
  console.log(typeof id, id)
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: id,
        'date.day': day,
        'date.month': month,
        'date.year': year
      }
    }
  ])

  return result
}

module.exports = byNamePerMonth
