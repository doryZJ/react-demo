import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/ActionType';

const initialState = {
  loginStatus: 0,
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        loginStatus: action.loginStatus
      });
    default:
      return state;
  }
}

export default login;
