const Router = require('@koa/router');
const { validate } = require('../../../middlewares/validator');
const { createSubscription } = require('../../controllers/subscriptionsController/createSubscription');
const { getSubscriptions } = require('../../controllers/subscriptionsController/getSubscriptions');
const { delSubscription } = require('../../controllers/subscriptionsController/delSubscription');

const router = new Router();

/*
  - POST    /subscriptions { data: { userId, subscriptionId } } => создаём подписку
  - GET     /subscriptions ? userId=&limit=                     => получаем подписки юзера
  - DELETE  /subscriptions / :id                                => удаляем подписку
*/

router.post('/', validate.post, async (ctx) => {
  const { path, request: { body } } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await createSubscription(body);
});

router.get('/', validate.get, async (ctx) => {
  const { path, query } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await getSubscriptions(query);
});

router.delete('/:id', validate.delete, async (ctx) => {
  const { path, params } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const result = await delSubscription(params);
  if (!result) ctx.throw(404);

  ctx.body = 'DELETED';
});

module.exports = { subscriptionsRouter: router };
