const express = require('express')
const reportController = require('../../../controllers/report')

const router = express.Router()

router.get('/report/short', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, reportController.getShortStatistics)
router.get('/report/short-per-month', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, reportController.getPerMonthStatistics)
router.get('/report/category-per-month', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, reportController.getCategoryPerMonthStatistics)
router.get('/report/by-name-per-month', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, reportController.getByNamePerMonth)
router.get('/report/all-in-day', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, reportController.getAllInDay)

module.exports = router
