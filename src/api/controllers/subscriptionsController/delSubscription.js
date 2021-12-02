const { getModuleLogger } = require('../../../services/logService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

async function delSubscription(id) {
  const delCount = await db.subscriptions.destroy({
    where: { id },
  });

  if (!delCount) return null;

  return true;
}

module.exports = { delSubscription };
