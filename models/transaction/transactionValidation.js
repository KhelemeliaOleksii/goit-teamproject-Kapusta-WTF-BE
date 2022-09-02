const Joi = require('joi')

const transactionSchema = Joi.object({
  date: Joi.object({
    day: Joi.string().required(),
    month: Joi.string().required(),
    year: Joi.string().required()
  }),
  description: Joi.object({
    descriptionName: Joi.string().required()
  }),
  transactionType: Joi.string().required().valid('income', 'expenses'),
  categoryId: Joi.string().required(),
  amount: Joi.number().required()
  // userId: Joi.string().required()
})

const validateTransaction = (transaction) =>
  transactionSchema.validate(transaction)

const transactionValidation = {
  validateTransaction
}

module.exports = transactionValidation
