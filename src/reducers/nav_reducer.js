import { TOGGLE_NAVMENU } from '../actions/index';

export default function navMenuToggle(state = false, action) {
    if (action.type === TOGGLE_NAVMENU) {
        return action.payload;
    } else {
        return state;
    }
}
