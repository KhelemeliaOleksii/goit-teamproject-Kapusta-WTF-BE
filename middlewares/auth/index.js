const ctrlWrapper = require('./ctrlWrapper')
const auth = require('./auth')

const authMiddleWare = {
  ctrlWrapper,
  auth
}

module.exports = authMiddleWare
