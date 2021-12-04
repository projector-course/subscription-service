const { REQUEST_ERROR_TYPE, HttpRequestError } = require('../errors/httpRequestError');
const gateway = require('../services/gatewayService');
const { findSubscription } = require('../api/controllers/subscriptionsController/findSubscription');
const { createSubscriptionSchema } = require('../api/schema');

const verifySubscriptionData = async (ctx, next) => {
  const { request: { body } } = ctx;

  const { value, error } = createSubscriptionSchema.validate(body);
  if (error) ctx.throw(400, error.message);

  const subscription = await findSubscription(value);
  if (subscription) ctx.throw(409);

  try {
    const subscriptionUser = await gateway.getUser(value);

    const { name } = subscriptionUser;
    ctx.log.info({ subscriptionUser: name }, 'DATA VERIFIED');

    ctx.subscription = value;
  } catch (e) {
    const { type, message } = e;
    if (!(e instanceof HttpRequestError)) ctx.throw(500, message);
    if (type !== REQUEST_ERROR_TYPE.NOT_FOUND_ERROR) ctx.throw(500, message);
    ctx.throw(400, 'Subscription User Not Exist');
  }

  await next();
};

module.exports = { verifySubscriptionData };
