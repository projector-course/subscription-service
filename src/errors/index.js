/* eslint-disable max-classes-per-file */
class SubscriptionExistError extends Error {
  constructor(message = 'Subscription already exist') {
    super(message);
    this.name = 'SubscriptionExistError';
    this.status = 409;
  }
}

class SubscriptionUserNotFound extends Error {
  constructor(message = 'Subscription user not found') {
    super(message);
    this.name = 'SubscriptionUserNotFound';
    this.status = 400;
  }
}

class ServiceKeyError extends Error {
  constructor(message = 'Bad service key') {
    super(message);
    this.name = 'ServiceKeyError';
    this.status = 401;
  }
}

module.exports = {
  SubscriptionExistError,
  SubscriptionUserNotFound,
  ServiceKeyError,
};
