import {BASE_URL} from '../constants/endpoints';
import {
  DELETE_METHOD,
  GET_METHOD,
  PATCH_METHOD,
  POST_METHOD,
} from '../constants';

export const fetchTasks = async (
  endpoint: string,
  method: string,
  body?: Record<string, any>,
) => {
  let reqHeader = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  };

  let res;

  if (method === GET_METHOD || method === DELETE_METHOD) {
    res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: reqHeader,
    });
    return await res.json();
  }
  if (method === POST_METHOD || method === PATCH_METHOD) {
    res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: reqHeader,
      body: JSON.stringify(body),
    });
    return await res.json();
  }
};
