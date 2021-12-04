const Joi = require('joi');

const isId = Joi.number().integer().min(0).required();

const isLimit = Joi.custom((limit, helpers) => {
  if (!limit) return undefined;
  const { value, error } = Joi.number().integer().positive().validate(limit);
  if (error) return helpers.error('any.invalid');
  return value;
});

const paramsSchema = Joi.object({
  id: isId,
});

const querySchema = Joi.object({
  userId: isId,
  limit: isLimit,
});

const createSubscriptionSchema = Joi.object({
  userId: isId,
  subscriptionId: isId,
});

module.exports = { createSubscriptionSchema, paramsSchema, querySchema };
