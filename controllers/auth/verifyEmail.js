const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user/')

const verifyEmail = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params
  const user = await userModel.findOne({ verificationToken })
  if (!user) {
    res.status(404).redirect("https://wtf-kapusta.netlify.app/login")
    throw new Error('User not found')
  }
  await userModel.findByIdAndUpdate(user._id, {
    verificationToken: '',
    verify: true
  })
  res.json({
    message: 'Verification successful'
  })
})

module.exports = verifyEmail
