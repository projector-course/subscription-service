const { GATEWAY_URL, USER_SERVICE_PREFIX } = require('./configService');
const { getModuleLogger } = require('./logService');
const { get } = require('../utils/httpRequest');

const logger = getModuleLogger(module);
logger.debug('SERVICE CREATED');

function getUser({ userId }) {
  const url = `${GATEWAY_URL}${USER_SERVICE_PREFIX}/${userId}`;
  logger.debug(url);
  return get(url);
}

module.exports = { getUser };
