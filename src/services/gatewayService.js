const { getModuleLogger } = require('./logService');
const { GATEWAY_URL } = require('./configService');
const { get } = require('../utils/httpRequest');

const logger = getModuleLogger(module);
logger.debug('SERVICE CREATED');

function getUser(userId) {
  const url = `${GATEWAY_URL}/users/${userId}`;
  logger.debug(url);
  return get(url);
}

module.exports = { getUser };
