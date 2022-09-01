const express = require('express')
const shortStatisticsController = require('../../../controllers/shortStatisticsController')
const shortPerMounthStatisticsController = require('../../../controllers/shortPerMounthStatisticsController')
const categoryPerMounthStatisticsController = require('../../../controllers/categoryPerMounthStatisticsController')

const router = express.Router()

router.get('/report/short/:transactionType', shortStatisticsController)
router.get('/report/short-per-mounth/:month/:year', shortPerMounthStatisticsController)
router.get('/report/category-per-mounth/:month/:year', categoryPerMounthStatisticsController)

module.exports = router
