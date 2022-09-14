const Joi = require('joi')

const emailRegexp = /[a-z0-9][a-z0-9._-]+@[a-z0-9]+[.]?[a-z0-9]+\.[a-z]{2,10}/

const passwordRegexp = /[0-9a-zA-Z,.!@#$%^&*]{10,20}/

const signupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passwordRegexp).required()
})

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required()
})

const validateSchema = (user) => signupSchema.validate(user)
const validateEmail = (email) => emailSchema.validate(email)

const userValidation = {
  validateSchema,
  validateEmail
}

module.exports = userValidation
