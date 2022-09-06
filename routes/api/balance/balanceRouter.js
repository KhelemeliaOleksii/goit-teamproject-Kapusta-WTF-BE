const { Router } = require('express')
const balanceController = require('../../../controllers/balance')
const { auth } = require('../../../middlewares/auth/')

const router = Router()

router.post('/balance', auth, balanceController.setBalance)

router.get('/balance', auth, balanceController.getBalance)
// router.post('/balance', (req, res, next) => {
//   req.user = { _id: '62e571247f3faf7ed194473e' }; next()
// }, balanceController.setBalance)

// router.get('/balance', (req, res, next) => {
//   req.user = { _id: '62e571247f3faf7ed194473e' }; next()
// }, balanceController.getBalance)

module.exports = router
