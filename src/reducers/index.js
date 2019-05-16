import { combineReducers } from 'redux';
import {navMenuToggle, loginFormToggle} from './nav_reducer';

const rootReducer = combineReducers({
    isNavToggled: navMenuToggle,
    isFormToggled: loginFormToggle
});

export default rootReducer;
