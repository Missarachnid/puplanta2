import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  mapReducer: mapReducer,
  authReducer: authReducer
});

export default rootReducer;