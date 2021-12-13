const VERIFICATION_ERROR_TYPE = {
  EXIST_ERROR: 'exist_error',
  NOT_FOUND_ERROR: 'not_found',
};

const HTTP_STATUS = {
  [VERIFICATION_ERROR_TYPE.NOT_FOUND_ERROR]: {
    status: 400,
  },
  [VERIFICATION_ERROR_TYPE.EXIST_ERROR]: {
    status: 409,
  },
};

class VerificationError extends Error {
  constructor(errorType, message = '') {
    super(message);
    this.type = errorType;
    const { status } = HTTP_STATUS[errorType];
    this.status = status;
  }
}

module.exports = { VERIFICATION_ERROR_TYPE, VerificationError };
