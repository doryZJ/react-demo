import { CHANGE_MENU } from '../constants/ActionType';

const changeMenu = (menu) => {
  return {
    type: CHANGE_MENU,
    menu
  }
}

export default changeMenu;
