const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user')

const { SECRET_KEY } = process.env

const auth = asyncHandler(async (req, res, next) => {
  const { authorization = '' } = req.headers
  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    next(res.status(401).send('Not authorized'))
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY)
    const user = await userModel.findById(id)
    if (!user || !user.token) {
      next(res.status(401).send('Not authorized'))
    }
    req.user = user
    next()
  } catch (error) {
    next(res.status(401).send('Not authorized'))
  }
})

module.exports = auth
