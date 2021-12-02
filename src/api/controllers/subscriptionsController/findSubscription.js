const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

const findSubscription = async (userId, subscriptionId) => {
  const result = await db.subscriptions.findOne({
    where: { userId, subscriptionId },
  });

  return result;
};

module.exports = { findSubscription };
