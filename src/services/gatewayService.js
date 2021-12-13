const { getModuleLogger } = require('./logService');
const { GATEWAY_URL } = require('./configService');
const { get } = require('../utils/httpRequest');
const { REQUEST_ERROR_TYPE } = require('../errors/httpRequestError');

const logger = getModuleLogger(module);
logger.debug('SERVICE CREATED');

async function getUser(userId) {
  const url = `${GATEWAY_URL}/users/${userId}`;
  logger.debug(url);

  try {
    const user = await get(url);
    return user;
  } catch (e) {
    if (e.type === REQUEST_ERROR_TYPE.NOT_FOUND_ERROR) return null;
    throw e;
  }
}

module.exports = { getUser };
