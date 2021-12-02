const { strToInteger } = require('../utils/helpers');

const verifyUser = async (ctx, next) => {
  const { query: { userId } } = ctx;

  const id = strToInteger(userId);
  if (!id) ctx.throw(400);

  ctx.user = { id };

  await next();
};

module.exports = { verifyUser };
