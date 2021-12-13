const Joi = require('joi');

const isId = Joi.number().integer().min(0).required();

const isLimit = Joi.custom((limit, helpers) => {
  if (!limit) return undefined;
  const { value, error } = Joi.number().integer().positive().validate(limit);
  if (error) return helpers.error('any.invalid');
  return value;
});

const createSubscriptionSchema = Joi.object({
  userId: isId,
  subscriptionId: isId,
});

const getSubscriptionSchema = Joi.object({
  userId: isId,
  limit: isLimit,
});

const delSubscriptionSchema = Joi.object({
  id: isId,
});

module.exports = {
  createSubscriptionSchema,
  getSubscriptionSchema,
  delSubscriptionSchema,
};
