const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user/')

const verifyEmail = asyncHandler(async (req, res) => {
  const { verificationToken } = req.params
  const user = await userModel.findOne({ verificationToken })
  if (!user) {
    res.status(404)
    throw new Error('User authorizated allready')
  }
  await userModel.findByIdAndUpdate(user._id, {
    verificationToken: '',
    verify: true
  })
    res.redirect(
// `https://wtf-kapusta.netlify.app/login?token=${userToken.token}`
    // `https://kapusta-wtf.herokuapp.com/api/v1/users/google-redirect?token=${userToken.token}`
    "https://wtf-kapusta.netlify.app/login"
  )
  // res.json({
  //   message: 'Verification successful'
  // })
})

module.exports = verifyEmail
