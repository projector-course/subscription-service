const { delSubscription } = require('../../controllers/subscriptionsController/delSubscription');
const { strToInteger } = require('../../../utils/helpers');

const delSubscriptionsRoute = async (ctx) => {
  const { path, params } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const id = strToInteger(params.id);
  if (id === undefined) ctx.throw(400);

  const result = await delSubscription(id);
  if (!result) ctx.throw(404);

  ctx.body = 'DELETED';
};

module.exports = { delSubscriptionsRoute };
