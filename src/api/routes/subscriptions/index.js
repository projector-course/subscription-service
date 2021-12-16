const Router = require('@koa/router');
const { isAuth } = require('../../../middlewares/isAuth');
const { validate } = require('../../../middlewares/validator');
const { createSubscription } = require('../../controllers/subscriptionsController/createSubscription');
const { getSubscriptions } = require('../../controllers/subscriptionsController/getSubscriptions');
const { delSubscription } = require('../../controllers/subscriptionsController/delSubscription');

const router = new Router();

/*
  - POST    /subscriptions { data: { subscriptionId } } => создаём подписку
  - GET     /subscriptions ? limit=                     => получаем подписки юзера
  - DELETE  /subscriptions /                            => удаляем подписку
*/

router.post('/', isAuth, validate.post, async (ctx) => {
  const { path, user, request: { body } } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await createSubscription({ ...body, userId: user.id });
});

router.get('/', isAuth, validate.get, async (ctx) => {
  const { path, user, query } = ctx;
  ctx.log.debug('ROUTE: %s', path);
  ctx.body = await getSubscriptions(user.id, query.limit);
});

router.delete('/:id', isAuth, validate.delete, async (ctx) => {
  const { path, user, params } = ctx;
  ctx.log.debug('ROUTE: %s', path);

  const result = await delSubscription(user.id, params.id);
  if (!result) ctx.throw(404);

  ctx.body = 'DELETED';
});

module.exports = { subscriptionsRouter: router };
