const getShortStatistics = require('./getShortStatistics')
const getPerMonthStatistics = require('./getPerMonthStatistics')
const getCategoryPerMonthStatistics = require('./getCategoryPerMonthStatistics')
const getByNamePerMonth = require('./getByNamePerMonth')
const getAllInDay = require('./getAllInDay')

const report = {
  getShortStatistics,
  getPerMonthStatistics,
  getCategoryPerMonthStatistics,
  getByNamePerMonth,
  getAllInDay
}

module.exports = report
