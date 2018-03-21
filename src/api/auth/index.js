import instance from '../index';

const LOGIN_URL = '/system/login.htm'

async function login(params) {
  return instance.post(LOGIN_URL, params)
}

export default {
  login
}
