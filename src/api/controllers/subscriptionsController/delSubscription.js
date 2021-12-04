const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function delSubscription(subscription) {
  return db.subscriptions.destroy({
    where: subscription,
  });
}

module.exports = { delSubscription };
