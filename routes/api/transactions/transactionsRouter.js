const { Router } = require('express')
const transactionsController = require('../../../controllers/transactions')
const { auth } = require('../../../middlewares/auth/')

const router = Router()

router.post('/transactions', auth, transactionsController.setTransaction)
router.delete('/transactions/:id', auth, transactionsController.deleteTransaction)
// router.post('/transactions', (req, res, next) => {
//   req.user = { _id: '62e571247f3faf7ed194473e' }; next()
// }, transactionsController.setTransaction)
// router.delete('/transactions/:id', (req, res, next) => {
//   req.user = { _id: '62e571247f3faf7ed194473e' }; next()
// }, transactionsController.deleteTransaction)

module.exports = router
