const express = require('express')
const shortStatisticsController = require('../../../controllers/shortStatisticsController')

const router = express.Router()

router.get('/report/short/:transactionType', shortStatisticsController)
// router.get('/report/deployed/:date', deployedStatisticsController)

module.exports = router
