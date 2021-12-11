const { getModuleLogger } = require('../../../services/logService');
const { findSubscription } = require('./findSubscription');
const { VERIFICATION_ERROR_TYPE, VerificationError } = require('../../../errors/verificationError');
const gateway = require('../../../services/gatewayService');
const db = require('../../../db/models');

const logger = getModuleLogger(module);
logger.debug('CONTROLLER CREATED');

async function createSubscription(data) {
  const subscription = await findSubscription(data);
  if (subscription) throw new VerificationError(VERIFICATION_ERROR_TYPE.EXIST_ERROR, 'Subscription already exist');

  const { subscriptionId } = data;
  const user = await gateway.getUser(subscriptionId);

  if (user) return db.subscriptions.create(data);

  throw new VerificationError(VERIFICATION_ERROR_TYPE.NOT_FOUND_ERROR, 'Subscription user not exist');
}

module.exports = { createSubscription };
