const { createSubscription } = require('../../controllers/subscriptionsController/createSubscription');

const postSubscriptionsRoute = async (ctx) => {
  const { path, subscription } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await createSubscription(subscription);
};

module.exports = { postSubscriptionsRoute };
