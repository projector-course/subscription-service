const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function findSubscription(subscription) {
  return db.subscriptions.findOne({
    where: subscription,
  });
}

module.exports = { findSubscription };
