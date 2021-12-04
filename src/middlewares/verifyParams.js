const { paramsSchema } = require('../api/schema');

const verifyParams = async (ctx, next) => {
  const { params } = ctx;

  const { value, error } = paramsSchema.validate(params);
  if (error) ctx.throw(400, error.message);

  ctx.subscription = value;

  await next();
};

module.exports = { verifyParams };
