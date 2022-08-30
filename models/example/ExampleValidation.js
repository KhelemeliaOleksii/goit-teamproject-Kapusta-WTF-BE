const Joi = require('joi')

const nameSchema = Joi.object({
  exampleName: Joi.string()
})
const passwordSchema = Joi.object({
  examplePassword: Joi.string()
    .required()
    .error(() => new Error('Password is required'))
})
const exampleSchema = Joi.object()
  .concat(nameSchema)
  .concat(passwordSchema)
  .required()

const validatePassword = (password) => passwordSchema.validate(password)
const validateName = (name) => nameSchema.validate(name)
const validateExample = (example) => exampleSchema.validate(example)

const ExampleValidation = {
  validatePassword,
  validateName,
  validateExample
}

module.exports = ExampleValidation
