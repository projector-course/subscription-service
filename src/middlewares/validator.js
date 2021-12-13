const { createSubscriptionSchema, getSubscriptionSchema, delSubscriptionSchema } = require('../api/schema');

const validate = {
  post: async (ctx, next) => {
    const { request: { body } } = ctx;
    const { error } = createSubscriptionSchema.validate(body);
    if (error) ctx.throw(400, error.message);
    await next();
  },

  get: (ctx, next) => {
    const { query } = ctx;
    const { error } = getSubscriptionSchema.validate(query);
    if (error) ctx.throw(400, error.message);
    return next();
  },

  delete: (ctx, next) => {
    const { params } = ctx;
    const { error } = delSubscriptionSchema.validate(params);
    if (error) ctx.throw(400, error.message);
    return next();
  },
};

module.exports = { validate };
