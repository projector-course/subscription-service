const { readToken, checkToken } = require('../utils/crypto');

const isAuth = async (ctx, next) => {
  const { headers } = ctx;

  const { 'x-token': token, 'x-service-token': serviceToken } = headers;
  if (!token || !serviceToken) ctx.throw(401);

  checkToken(serviceToken);

  const { data } = readToken(token);

  ctx.user = data;

  return next();
};

module.exports = { isAuth };
