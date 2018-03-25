import { CHANGE_MENU } from '../constants/ActionType';

const initState = {
  selectedMenu: 'mail'
}

const changeMenu = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_MENU:
    return Object.assign({}, state, {
      selectedMenu: action.menu
    })
    default:
      return state
  }
}

export default changeMenu;
