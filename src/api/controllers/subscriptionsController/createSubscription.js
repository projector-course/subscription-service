const { getModuleLogger } = require('../../../services/logService');
const { findSubscription } = require('./findSubscription');
const { VERIFICATION_ERROR_TYPE, VerificationError } = require('../../../errors/verificationError');
const gateway = require('../../../services/gatewayService');
const { REQUEST_ERROR_TYPE, HttpRequestError } = require('../../../errors/httpRequestError');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

async function createSubscription(data) {
  const subscription = await findSubscription(data);
  if (subscription) throw new VerificationError(VERIFICATION_ERROR_TYPE.EXIST_ERROR);

  try {
    const { subscriptionId } = data;
    await gateway.getUser(subscriptionId);
  } catch (e) {
    const { type } = e;
    if (!(e instanceof HttpRequestError)) throw e;
    if (type !== REQUEST_ERROR_TYPE.NOT_FOUND_ERROR) throw e;
    throw new VerificationError(VERIFICATION_ERROR_TYPE.NOT_FOUND_ERROR);
  }

  return db.subscriptions.create(data);
}

module.exports = { createSubscription };
