const { getSubscriptions } = require('../../controllers/subscriptionsController/getSubscriptions');

const getSubscriptionsRoute = async (ctx) => {
  const { path, params } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const subscriptions = await getSubscriptions(params);
  if (!subscriptions) ctx.throw(404);

  ctx.body = subscriptions;
};

module.exports = { getSubscriptionsRoute };
