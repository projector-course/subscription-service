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

class BadTokenError extends Error {
  constructor(message = 'Bad token') {
    super(message);
    this.name = 'BadTokenError';
    this.status = 400;
  }
}

module.exports = {
  SubscriptionExistError,
  SubscriptionUserNotFound,
  BadTokenError,
};
