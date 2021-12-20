const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function delSubscription(userId, id) {
  return db.subscriptions.destroy({
    where: { userId, id },
  });
}

module.exports = { delSubscription };
