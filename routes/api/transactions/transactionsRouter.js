const { Router } = require('express')
const transactionsController = require('../../../controllers/transactions')
const { auth } = require('../../../middlewares/auth/')

const router = Router()

router.post('/transactions', auth, transactionsController.addTransaction)
router.delete('/transactions/:id', auth, transactionsController.deleteTransaction)

module.exports = router
