import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    userReduce:  userReducer
});

export default rootReducer;