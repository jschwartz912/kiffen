import { TOGGLE_NAVMENU, TOGGLE_LOGIN_FORM } from '../actions/index';

export function navMenuToggle(state = false, action) {
    if (action.type === TOGGLE_NAVMENU) {
        return action.payload;
    } else {
        return state;
    }
}

export function loginFormToggle(state = false, action) {
    if (action.type === TOGGLE_LOGIN_FORM) {
        return action.payload;
    }
    return state;
}

export default {navMenuToggle, loginFormToggle};