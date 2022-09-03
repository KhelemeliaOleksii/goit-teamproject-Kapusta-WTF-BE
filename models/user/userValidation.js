const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const signupSchema = Joi.object({
  // username: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const validateSchema = (user) => signupSchema.validate(user);
const validateEmail = (email) => emailSchema.validate(email);

const userValidation = {
  validateSchema,
  validateEmail,
};

module.exports = userValidation;
