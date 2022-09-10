const { Router } = require('express')

const ctrl = require('../../../controllers/auth/')

const { auth } = require('../../../middlewares/auth/')

const router = Router()

router.post('/users/signup', ctrl.signup)

router.post('/users/login', ctrl.login)

router.get('/users/logout', auth, ctrl.logout)

router.get('/users/current', auth, ctrl.getCurrent)

router.get('/users/verify/:verificationToken', ctrl.verifyEmail)

router.post('/users/verify', ctrl.resendVerifyEmail)

router.get('/users/google', ctrl.googleAuth)

router.get('/users/google-redirect', ctrl.googleRedirect)

module.exports = router
