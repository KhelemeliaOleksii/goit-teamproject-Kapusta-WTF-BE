const { Router } = require('express')
const balanceController = require('../../../controllers/balance')

const router = Router()

router.post('/balance', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, balanceController.setBalance)

router.get('/balance', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, balanceController.getBalance)

module.exports = router
