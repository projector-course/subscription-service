const axios = require('axios');
const { HttpRequestError, REQUEST_ERROR_TYPE } = require('../errors/httpRequestError');

const { RESPONSE_ERROR, DATA_ERROR, NETWORK_ERROR } = REQUEST_ERROR_TYPE;

function checkJson(reqPromise) {
  return reqPromise
    .then((res) => {
      const { headers, data } = res;
      const { 'content-type': contentType } = headers;
      if (!/^application\/json/.test(contentType)) {
        throw new HttpRequestError(DATA_ERROR, 'Wrong content-type');
      }
      if (typeof data === 'string') {
        throw new HttpRequestError(DATA_ERROR, 'Wron data format');
      }
      return data;
    })
    .catch((e) => {
      if (e instanceof HttpRequestError) throw e;
      const { response, request } = e;
      if (response) {
        const { status, statusText, data } = response;
        throw new HttpRequestError(RESPONSE_ERROR, data || statusText, status);
      } else if (request) {
        throw new HttpRequestError(NETWORK_ERROR);
      }
      throw e;
    });
}

function get(url, options) {
  return checkJson(axios.get(url, options));
}

function post(url, data) {
  return checkJson(axios.post(url, data));
}

module.exports = { get, post };
