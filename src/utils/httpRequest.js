const axios = require('axios');
const { HttpRequestError, REQUEST_ERROR_TYPE } = require('../errors/httpRequestError');

function checkJson(reqPromise) {
  return reqPromise
    .then((res) => {
      const { headers, data } = res;
      const { 'content-type': contentType } = headers;
      if (!/^application\/json/.test(contentType)) {
        throw new HttpRequestError(REQUEST_ERROR_TYPE.DATA_ERROR, 'Wrong content-type');
      }
      if (typeof data === 'string') {
        throw new HttpRequestError(REQUEST_ERROR_TYPE.DATA_ERROR, 'Wron data format');
      }
      return data;
    })
    .catch((e) => {
      if (e instanceof HttpRequestError) throw e;
      const { response, request, message } = e;
      if (response) {
        if (response.status === 404) {
          throw new HttpRequestError(REQUEST_ERROR_TYPE.NOT_FOUND_ERROR, message);
        }
        throw new HttpRequestError(REQUEST_ERROR_TYPE.RESPONSE_ERROR, message);
      } else if (request) throw new HttpRequestError(REQUEST_ERROR_TYPE.NETWORK_ERROR, message);
      throw e;
    });
}

function get(url) {
  return checkJson(axios.get(url));
}

function post(url, data) {
  return checkJson(axios.post(url, data));
}

module.exports = { get, post };
