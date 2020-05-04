import 'whatwg-fetch';

import { getAuthToken } from './auth';

const API_BASE_URL = '../config/constants';
const token = getAuthToken();

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept-Language': 'en',
};

function prepare(response, options) {
  const { headers, status } = response;
  const result = response.status >= 200 && response.status < 300;
  return response.text().then((text) => {
    let body = {};
    const contentType = response.headers.get('content-type');
    if (text.length > 0 && contentType.includes('application/json')) {
      try {
        body = JSON.parse(text);
      } catch (err) {
        window.console.log(err);
      }
    }
    return {
      body,
      headers,
      status,
      result,
      options,
    };
  });
}

/**
 * Requests a URL, returning a promise
 * @param {string} url The URL we want to request
 * @param {object} [options] The options we want to pass to "fetch"
 * @returns {Promise} The response data
 */
export async function request(url, options = {}) {
  const { headers = {}, ...otherOptions } = options;
  let requestUrl = url;
  if (options.query) {
    const esc = encodeURIComponent;
    const query = Object.keys(options.query)
      .filter((key) => Boolean(options.query[key]))
      .map((key) => `${esc(key)}=${esc(options.query[key])}`)
      .join('&');
    if (query) requestUrl += `?${query}`;
  }
  if (otherOptions.body) {
    otherOptions.body = JSON.stringify(otherOptions.body);
  }
  if (token) {
    headers.Authorization = `${token}`;
  }

  return fetch(`${API_BASE_URL}${requestUrl}`, {
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    ...otherOptions,
    timeout: 10000,
  })
    .then((result) => prepare(result, options))
    .catch((error) => ({
      body: {},
      headers: error.headers || {},
      status: error.status || 408,
      result: false,
    }));
}

export function get(url, options = {}) {
  return request(url, {
    ...options,
    method: 'get',
  });
}

export function post(url, body = {}, options = {}) {
  return request(url, {
    ...options,
    method: 'post',
    body,
  });
}

export function put(url, body = {}, options = {}) {
  return request(url, {
    ...options,
    method: 'put',
    body,
  });
}

export function patch(url, body = {}, options = {}) {
  return request(url, {
    ...options,
    method: 'patch',
    body,
  });
}

export function del(url, options = {}) {
  return request(url, {
    ...options,
    method: 'delete',
  });
}

export default {
  request,
  get,
  post,
  put,
  del,
};
