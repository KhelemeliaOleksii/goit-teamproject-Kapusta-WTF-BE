const express = require('express')
const reportController = require('../../../controllers/report')

const router = express.Router()

router.get('/report/short', reportController.getShortStatistics)
router.get('/report/short-per-month', reportController.getPerMonthStatistics)
router.get('/report/category-per-month', reportController.getCategoryPerMonthStatistics)
// router.get('/report/by-name-per-month', categoryPerMonthStatisticsController)

module.exports = router
