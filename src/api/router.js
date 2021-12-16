const Router = require('@koa/router');
const { PREFIX: prefix } = require('../services/configService');
const { getHealthRoute } = require('./routes/health/getHealthRoute');
const { subscriptionsRouter } = require('./routes/subscriptions');

const router = new Router({ prefix });

/*
  - GET     /subscriptions/health

  - POST    /subscriptions { data: { subscriptionId } } => создаём подписку
  - GET     /subscriptions ? userId=&limit=             => получаем подписки юзера
  - DELETE  /subscriptions / :id                        => удаляем подписку
*/

router
  .get('/health', getHealthRoute)
  .use(subscriptionsRouter.routes(), subscriptionsRouter.allowedMethods());

module.exports = { router };
