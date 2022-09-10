const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user')

const { SECRET_KEY } = process.env

const auth = asyncHandler(async (req, res, next) => {
  const { authorization = "" } = req.headers
  if (!authorization) {
    // res.status(401)
    res.status(402)
    throw new Error('Not authorized 1')
  }
  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    // res.status(401)
    res.status(403)
    throw new Error('Not authorized 2')
  }
  try {
   const { id } = jwt.verify(token, SECRET_KEY)
   const user = await userModel.findById(id)
   if (!user || !user.token) {
   // res.status(401)
    res.status(404)
    throw new Error('Not authorized 3')
    }
    req.user = user
    next()
  } catch (error) {
    res.status(401)
    throw new Error('Not authorized')
  }
})

module.exports = auth
