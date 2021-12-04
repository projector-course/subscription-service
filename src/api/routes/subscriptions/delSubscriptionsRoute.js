const { delSubscription } = require('../../controllers/subscriptionsController/delSubscription');

const delSubscriptionsRoute = async (ctx) => {
  const { path, subscription } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const result = await delSubscription(subscription);
  if (!result) ctx.throw(404);

  ctx.body = 'DELETED';
};

module.exports = { delSubscriptionsRoute };
