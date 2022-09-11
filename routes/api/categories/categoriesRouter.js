const express = require('express')
const categoriesController = require('../../../controllers/categories')
const { auth } = require('../../../middlewares/auth/')

const router = express.Router()

router.get('/categories', auth, categoriesController)

module.exports = router
