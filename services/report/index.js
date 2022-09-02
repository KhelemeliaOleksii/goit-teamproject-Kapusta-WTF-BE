const shortStatistics = require('./shortStatistics')
const shortPerMonthStatistics = require('./shortPerMonthStatistics')
const categoryPerMonthStatistics = require('./categoryPerMonthStatistics')
const byNamePerMonth = require('./byNamePerMonth')
const allInDay = require('./allInDay')

const reportServises = {
  shortStatistics,
  shortPerMonthStatistics,
  categoryPerMonthStatistics,
  byNamePerMonth,
  allInDay
}

module.exports = reportServises
