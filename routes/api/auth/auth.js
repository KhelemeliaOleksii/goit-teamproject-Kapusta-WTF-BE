const { Router } = require('express')

const ctrl = require('../../../controllers/auth/')

const { auth } = require('../../../middlewares/auth/')

const router = Router()

router.post('/signup', ctrl.signup)

router.post('/login', ctrl.login)

router.get('/logout', auth, ctrl.logout)

router.get('/current', auth, ctrl.getCurrent)

router.get('/verify/:verificationToken', ctrl.verifyEmail)

router.post('/verify', ctrl.resendVerifyEmail)

router.get('/google', ctrl.googleAuth)

router.get('/google-redirect', ctrl.googleRedirect)

module.exports = router
