import { combineReducers } from 'redux'
import provincesReducer from './provinces';
import authReducer from './auth';

const createRootReducer = () =>
  combineReducers({
    provinces: provincesReducer,
    auth: authReducer,
  });

export default createRootReducer;
