const { getSubscriptions } = require('../../controllers/subscriptionsController/getSubscriptions');
const { strToInteger } = require('../../../utils/helpers');

const getSubscriptionsRoute = async (ctx) => {
  const { path, user, query } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const limit = strToInteger(query.limit);

  const subscriptions = await getSubscriptions(user.id, limit);
  if (!subscriptions) ctx.throw(404);

  ctx.body = subscriptions;
};

module.exports = { getSubscriptionsRoute };
