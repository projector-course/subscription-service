const Router = require('@koa/router');
const { verifyData } = require('../../../middlewares/verifyData');
const { verifyUser } = require('../../../middlewares/verifyUser');
const { postSubscriptionsRoute } = require('./postSubscriptionsRoute');
const { getSubscriptionsRoute } = require('./getSubscriptionsRoute');
const { delSubscriptionsRoute } = require('./delSubscriptionsRoute');

const router = new Router();

router
  .post('/', verifyData, postSubscriptionsRoute)
  .get('/', verifyUser, getSubscriptionsRoute)
  .delete('/:id', delSubscriptionsRoute);

module.exports = { subscriptionsRouter: router };
