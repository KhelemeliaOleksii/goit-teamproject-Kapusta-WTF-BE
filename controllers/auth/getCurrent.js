const asyncHandler = require('express-async-handler')
const balanceService = require('../../services/balance')
const getCurrent = asyncHandler(async (req, res) => {
  const { email, _id, username } = req.user
  if (!_id) {
    res.status(401)
    throw new Error('Not authorized')
  }
  const userId = _id.toString()

  try {
    const userBalance = await balanceService.getBalance(userId)
    if (!userBalance) {
      throw new Error()
    }
    res.json({
      username,
      email,
      balance: userBalance,
    })      
  } catch (error) {
    res.json({
      username,
      email,
      balance: null,
    })
  }
})

module.exports = getCurrent
