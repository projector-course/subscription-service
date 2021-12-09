const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

function delSubscription({ id }) {
  return db.subscriptions.destroy({
    where: { id },
  });
}

module.exports = { delSubscription };
