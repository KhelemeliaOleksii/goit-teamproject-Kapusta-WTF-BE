const express = require('express')
const reportController = require('../../../controllers/report')
// const { auth } = require('../../../middlewares/auth/')

const router = express.Router()

// router.get('/report/short', auth, reportController.getShortStatistics)
// router.get('/report/short-per-month', auth, reportController.getPerMonthStatistics)
// router.get('/report/category-per-month', auth, reportController.getCategoryPerMonthStatistics)
// router.get('/report/by-name-per-month', auth, reportController.getByNamePerMonth)
// router.get('/report/all-in-day', auth, reportController.getAllInDay)

router.get('/report/short', (req, res, next) => {
  req.user = { _id: '63186fde0ce271b8f5d898bf' }; next()
}, reportController.getShortStatistics)
router.get('/report/short-per-month', (req, res, next) => {
  req.user = { _id: '63186fde0ce271b8f5d898bf' }; next()
}, reportController.getPerMonthStatistics)
router.get('/report/category-per-month', (req, res, next) => {
  req.user = { _id: '63186fde0ce271b8f5d898bf' }; next()
}, reportController.getCategoryPerMonthStatistics)
router.get('/report/by-name-per-month', (req, res, next) => {
  req.user = { _id: '63186fde0ce271b8f5d898bf' }; next()
}, reportController.getByNamePerMonth)
router.get('/report/all-in-day', (req, res, next) => {
  req.user = { _id: '63186fde0ce271b8f5d898bf' }; next()
}, reportController.getAllInDay)

module.exports = router
