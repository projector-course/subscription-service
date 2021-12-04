const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function createSubscription(subscription) {
  return db.subscriptions.create(subscription);
}

module.exports = { createSubscription };
