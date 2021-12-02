const { createSubscription } = require('../../controllers/subscriptionsController/createSubscription');

const postSubscriptionsRoute = async (ctx) => {
  const { path, user, subscriptionUser } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await createSubscription(user.id, subscriptionUser.id);
};

module.exports = { postSubscriptionsRoute };
