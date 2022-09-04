const Joi = require('joi')

const transactionSchema = Joi.object({
  date: Joi.object({
    day: Joi.number().min(1).max(31).required(),
    month: Joi.number().min(0).max(11).required(),
    year: Joi.number().min(2021).required()
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
