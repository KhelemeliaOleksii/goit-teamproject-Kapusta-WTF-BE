const asyncHandler = require('express-async-handler')
const { userModel, userValidation } = require('../../models/user/')

const { sendEmail } = require('../../services/auth/')

const resendVerifyEmail = asyncHandler(async (req, res) => {
  const { email } = req.body
  const { error } = userValidation.validateEmail({ email })
  if (error) {
    res.status(400)
    throw new Error('missing required field email')
  }
  const user = await userModel.findOne({ email })
  if (!user) {
    res.status(404)
    throw new Error()
  }
  if (user.verify) {
    res.status(400)
    throw new Error('Verification has already been passed')
  }
 const mail = {
    to: email,
    subject: 'Підтвердження реєстрації на сайті',
    html: `Вас вітає команда WTF<br>Для підтвердження реєстрації перейдіть за посиланням<br><a target="_blank" href="https://kapusta-wtf.herokuapp.com/api/v1/users/verify/${verificationToken}">Підтвердження реєстрації</a>`
  }
  await sendEmail(mail)
  res.json({
    message: 'Verification email sent'
  })
})

module.exports = resendVerifyEmail
