const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const { nanoid } = require('nanoid')

const { userModel, userValidation } = require('../../models/user/')

const { sendEmail } = require('../../services/auth/')

const signup = asyncHandler(async (req, res) => {
  const { error } = userValidation.validateSchema(req.body)
  if (error) {
    res.status(400)
    throw new Error(error.message)
  }

  const { email, password } = req.body
  const user = await userModel.findOne({ email: email.toLowerCase() })
  if (user) {
    res.status(409)
    throw new Error('Email in use')
  }

  const hashPassword = await bcrypt.hash(password, 10)
  const verificationToken = nanoid()
  const result = await userModel.create({
    email: email.toLowerCase(),
    username: email.substring(email[0], email.search('@')),
    password: hashPassword,
    verificationToken
  })

  const mail = {
    to: email,
    subject: 'Підтвердження реєстрації на сайті',
    html: `Вас вітає команда WTF<br>Для підтвердження реєстрації перейдіть за посиланням<br><a target="_blank" href="https://kapusta-wtf.herokuapp.com/api/v1/users/verify/${verificationToken}">Підтвердження реєстрації</a>`
  }

  await sendEmail(mail)
  res.status(201).json({
    user: {
      email: result.email
    }
  })
})

module.exports = signup
