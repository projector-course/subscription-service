const { getModuleLogger } = require('../../../services/logService');
const { findSubscription } = require('./findSubscription');
const { SubscriptionExistError, SubscriptionUserNotFound } = require('../../../errors');
const gateway = require('../../../services/gatewayService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

async function createSubscription(data) {
  const subscription = await findSubscription(data);
  if (subscription) throw new SubscriptionExistError();

  const { subscriptionId } = data;
  const user = await gateway.getUser(subscriptionId);

  if (!user) throw new SubscriptionUserNotFound();

  return db.subscriptions.create(data);
}

module.exports = { createSubscription };
