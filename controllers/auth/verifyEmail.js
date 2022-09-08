const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user/')

const verifyEmail = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params
  const user = await userModel.findOne({ verificationToken })
  if (!user) {
    res.status(400)
    throw new Error('Bad request')
  }
  await userModel.findByIdAndUpdate(user._id, {
    verificationToken: '',
    verify: true
  })
  res.redirect(
    'https://wtf-kapusta.netlify.app/login'
  )
})

module.exports = verifyEmail
