import { combineReducers } from 'redux';
import user from './LoginReducer';


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  user
});

export default rootReducer;