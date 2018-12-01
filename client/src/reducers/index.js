import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer
});

export default rootReducer;
