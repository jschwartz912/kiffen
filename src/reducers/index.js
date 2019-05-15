import { combineReducers } from 'redux';
import NavReducer from './nav_reducer';

const rootReducer = combineReducers({
    isNavToggled: NavReducer
});

export default rootReducer;
