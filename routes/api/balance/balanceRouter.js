const { Router } = require('express')
const balanceController = require('../../../controllers/balance')
const { auth } = require('../../../middlewares/auth/')

const router = Router()

router.post('/balance', auth, balanceController.addBalance)
router.get('/balance', auth, balanceController.getBalance)

module.exports = router
