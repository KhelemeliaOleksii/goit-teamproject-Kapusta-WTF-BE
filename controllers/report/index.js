const getShortStatistics = require('./getShortStatistics')
const getPerMonthStatistics = require('./getPerMonthStatistics')
const getCategoryPerMonthStatistics = require('./getCategoryPerMonthStatistics')

const report = {
  getShortStatistics,
  getPerMonthStatistics,
  getCategoryPerMonthStatistics
}

module.exports = report
