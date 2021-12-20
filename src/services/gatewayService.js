const { getModuleLogger } = require('./logService');
const { GATEWAY_URL, SERVICE_KEY } = require('./configService');
const { get } = require('../utils/httpRequest');

const logger = getModuleLogger(module);
logger.debug('SERVICE CREATED');

async function getUser(userId) {
  const url = `${GATEWAY_URL}/users/${userId}`;
  logger.debug(url);
  const headers = { 'x-service-key': SERVICE_KEY };
  return get(url, { headers });
}

module.exports = { getUser };
