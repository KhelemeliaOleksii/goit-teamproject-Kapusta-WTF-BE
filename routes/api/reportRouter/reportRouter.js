const express = require('express')
const shortStatisticsController = require('../../../controllers/shortStatisticsController')
const shortPerMonthStatisticsController = require('../../../controllers/shortPerMonthStatisticsController')
const categoryPerMonthStatisticsController = require('../../../controllers/categoryPerMonthStatisticsController')

const router = express.Router()

router.get('/report/short', shortStatisticsController) // +
router.get('/report/short-per-month', shortPerMonthStatisticsController)
router.get('/report/category-per-month', categoryPerMonthStatisticsController)

module.exports = router
