import { combineReducers } from 'redux';
import user from './LoginReducer';
import book from './bookReducer';


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  user,book
});

export default rootReducer;