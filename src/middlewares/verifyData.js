const { REQUEST_ERROR_TYPE, HttpRequestError } = require('../errors/httpRequestError');
const gateway = require('../services/gatewayService');
const { findSubscription } = require('../api/controllers/subscriptionsController/findSubscription');

const verifyData = async (ctx, next) => {
  const { request: { body } } = ctx;
  const { userId, subscriptionId } = body;

  if (!userId || !subscriptionId) ctx.throw(400);

  const subscription = await findSubscription(userId, subscriptionId);
  if (subscription) ctx.throw(409);

  try {
    const subscriptionUser = await gateway.getUser(subscriptionId);

    const { name } = subscriptionUser;
    ctx.log.info({ subscriptionUser: name }, 'DATA VERIFIED');

    ctx.user = { id: userId };
    ctx.subscriptionUser = subscriptionUser;
  } catch (e) {
    const { type, message } = e;
    if (!(e instanceof HttpRequestError)) ctx.throw(500, message);
    if (type !== REQUEST_ERROR_TYPE.NOT_FOUND_ERROR) ctx.throw(500, message);
    ctx.throw(400, 'Subscription User Not Exist');
  }

  await next();
};

module.exports = { verifyData };
