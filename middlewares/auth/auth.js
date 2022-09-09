const jwt = require('jsonwebtoken')

const { userModel } = require('../../models/user')

const { SECRET_KEY } = process.env

const auth = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Not authorized',
    })
    return
  }
  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Not authorized',
    })
    return
  }
  try {
    const { _id } = jwt.verify(token, SECRET_KEY)
    const user = await userModel.findById(_id)
    if (!user.token) {
      res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Not authorized',
      })
      return
    }
    req.user = user
    next()
  } catch (error) {
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Not authorized',
    })
  }
}

module.exports = auth
