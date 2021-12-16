const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function getSubscriptions(userId, limit) {
  return db.subscriptions.findAll({
    limit: limit || undefined,
    where: { userId },
  });
}

module.exports = { getSubscriptions };
