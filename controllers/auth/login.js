const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const balanceService = require('../../services/balance')
const { userModel, userValidation } = require('../../models/user/')

const { SECRET_KEY } = process.env

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const { error } = userValidation.validateSchema(req.body)
  if (error) {
    res.status(400)
    throw new Error(error.message)
  }

  const user = await userModel.findOne({ email })
  if (!user) {
    res.status(401)
    throw new Error('Email or password is wrong')
  }

  if (!user.verify) {
    res.status(401)
    throw new Error('Email not verify')
  }

  const comparePassword = await bcrypt.compare(password, user.password)
  if (!comparePassword) {
    res.status(401)
    throw new Error('Email or password is wrong')
  }

  const payload = {
    id: user._id
  }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
  await userModel.findByIdAndUpdate({ _id: user._id }, { token })

  try {
    const userBalance = await balanceService.getBalance(user._id)
    if (!userBalance) {
      throw new Error()
    }
    res.json({
      username: user.username,
      token,
      email,
      balance: userBalance
    })
  } catch {
    res.json({
      username: user.username,
      token,
      email,
      balance: null
    })
  }
})

module.exports = login
