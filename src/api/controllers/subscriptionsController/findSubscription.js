const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function findSubscription(data) {
  return db.subscriptions.findOne({
    where: data,
  });
}

module.exports = { findSubscription };
