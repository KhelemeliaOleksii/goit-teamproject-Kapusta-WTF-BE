const asyncHandler = require('express-async-handler')

const { userModel } = require('../../models/user/')

const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user
  await userModel.findByIdAndUpdate(_id, { token: '' })
  // res.status(204).redirect('https://wtf-kapusta.netlify.app/login')
  res.status(204)
    .json({
      status: 'success',
      code: 204,
      message: 'User logged out successfuly'
    })
})

module.exports = logout
