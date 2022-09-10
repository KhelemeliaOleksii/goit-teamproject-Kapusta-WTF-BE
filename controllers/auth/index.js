const signup = require('./signup')
const login = require('./login')
const getCurrent = require('./getCurrent')
const verifyEmail = require('./verifyEmail')
const logout = require('./logout')
const resendVerifyEmail = require('./resendVerifyEmail')
const { googleAuth, googleRedirect } = require('./googleAuth')

const authController = {
  signup,
  login,
  getCurrent,
  verifyEmail,
  logout,
  resendVerifyEmail,
  googleAuth,
  googleRedirect
}

module.exports = authController
