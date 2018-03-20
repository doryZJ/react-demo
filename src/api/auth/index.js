import instance from '../index';

const LOGIN_URL = '/system/login'

async function login(params) {
  return instance.post(LOGIN_URL, params)
}

export default {
  login
}
