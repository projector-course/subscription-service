const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

const createSubscription = async (userId, subscriptionId) => {
  const result = await db.subscriptions.create({
    userId,
    subscriptionId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return result;
};

module.exports = { createSubscription };
