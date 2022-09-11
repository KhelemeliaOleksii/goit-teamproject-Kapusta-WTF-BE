const express = require('express')
const reportController = require('../../../controllers/report')
const { auth } = require('../../../middlewares/auth/')

const router = express.Router()

router.get('/report/short', auth, reportController.getShortStatistics)
router.get('/report/short-per-month', auth, reportController.getPerMonthStatistics)
router.get('/report/category-per-month', auth, reportController.getCategoryPerMonthStatistics)
router.get('/report/by-name-per-month', auth, reportController.getByNamePerMonth)
router.get('/report/all-in-day', auth, reportController.getAllInDay)

module.exports = router
