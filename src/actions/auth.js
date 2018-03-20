import { message } from 'antd';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/ActionType';
import Api from '../api/auth/index';

const setLoginStatus = (type, loginStatus) => ({type, loginStatus});

const login = params => async (dispatch) => {
  try {
    console.log('params', params)
    dispatch(setLoginStatus(LOGIN_REQUEST, 1));
    const response = await Api.login(params)
    const { code } = response
    if (code === 1) {
      dispatch(setLoginStatus(LOGIN_SUCCESS, 2));
      message.success('登录成功！')
    } else {
      dispatch(setLoginStatus(LOGIN_FAILED, 3));
      message.success('登录失败，请重试！')
    }
  } catch (error) {
    dispatch(setLoginStatus(LOGIN_FAILED, 3));
    message.error('登录失败，请重试！')
  }
}

export default {
  login
};
