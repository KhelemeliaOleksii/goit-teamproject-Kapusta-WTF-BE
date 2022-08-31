const { Router } = require('express')
const transactionsController = require('../../../controllers/transactions')

const router = Router()

router.post('/transactions', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, transactionsController.setTransaction)

module.exports = router
