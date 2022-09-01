const { Router } = require('express')

const ctrl = require('../../../controllers/auth/')

const { ctrlWrapper, auth } = require('../../../middlewares/auth/')

const router = Router()

router.post('/signup', ctrlWrapper(ctrl.signup))

router.post('/login', ctrlWrapper(ctrl.login))

router.get('/logout', auth, ctrlWrapper(ctrl.logout))

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail))

router.post('/verify', ctrlWrapper(ctrl.resendVerifyEmail))

router.get('/google', ctrlWrapper(ctrl.googleAuth))

router.get('/google-redirect', ctrlWrapper(ctrl.googleRedirect))

module.exports = router
