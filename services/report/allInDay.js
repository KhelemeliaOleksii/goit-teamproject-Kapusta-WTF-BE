const TransactionModel = require('../../models/transaction/transactionModel')

const byNamePerMonth = async (day, month, year) => {
  console.log(typeof day, day)
  console.log(typeof month, month)
  console.log(typeof year, year)
  const result = await TransactionModel.aggregate([
    {
      $match: {
        userId: '62e571247f3faf7ed194473e',
        'date.day': day,
        'date.month': month,
        'date.year': year
      }
    }
  ])

  return result
}

module.exports = byNamePerMonth
