const REQUEST_ERROR_TYPE = {
  RESPONSE_ERROR: 'response_error',
  NETWORK_ERROR: 'network_error',
  DATA_ERROR: 'data_error',
  NOT_FOUND_ERROR: 'not_found',
};

class HttpRequestError extends Error {
  constructor(errorType, message = '') {
    super(message);
    this.type = errorType;
  }
}

module.exports = { REQUEST_ERROR_TYPE, HttpRequestError };
