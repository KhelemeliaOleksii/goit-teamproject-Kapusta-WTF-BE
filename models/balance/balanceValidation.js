const Joi = require('joi')

const balanceSchema = Joi.object({
  // userId: Joi.string().required(),
  currentBalance: Joi.string().required().default('0')
})

const validateBalance = (balance) => balanceSchema.validate(balance)

const balanceValidation = {
  validateBalance
}

module.exports = balanceValidation
