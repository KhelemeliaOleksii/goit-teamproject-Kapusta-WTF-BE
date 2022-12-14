const Joi = require('joi')

const categorySchema = Joi.object({
  categoryName: Joi.string().required().min(2).max(10),
  imageUrl: Joi.string().required(),
  categoryType: Joi.string().required().valid('income', 'expenses')
  // .default("../../public/avatars/defaultAvatar.jpg")
})

const validatecategory = (category) => categorySchema.validate(category)

const categoryValidation = {
  validatecategory
}

module.exports = categoryValidation
