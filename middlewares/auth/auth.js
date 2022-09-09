const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user')

const { SECRET_KEY } = process.env

const auth = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401)
    throw new Error('Not authorized')
  }
  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    res.status(401)
    throw new Error('Not authorized')
  }
  const { _id } = jwt.verify(token, SECRET_KEY)
  const user = await userModel.findById(_id)
  if (!user.token) {
    res.status(401)
    throw new Error('Not authorized')
    }
  req.user = user
  next()
})

module.exports = auth
