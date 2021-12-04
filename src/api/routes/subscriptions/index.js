const Router = require('@koa/router');
const { verifySubscriptionData } = require('../../../middlewares/verifySubscriptionData');
const { verifyQuery } = require('../../../middlewares/verifyQuery');
const { verifyParams } = require('../../../middlewares/verifyParams');
const { postSubscriptionsRoute } = require('./postSubscriptionsRoute');
const { getSubscriptionsRoute } = require('./getSubscriptionsRoute');
const { delSubscriptionsRoute } = require('./delSubscriptionsRoute');

const router = new Router();

router
  .post('/', verifySubscriptionData, postSubscriptionsRoute)
  .get('/', verifyQuery, getSubscriptionsRoute)
  .delete('/:id', verifyParams, delSubscriptionsRoute);

module.exports = { subscriptionsRouter: router };
