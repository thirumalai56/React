import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const AppStore = createStore(rootReducer,applyMiddleware(thunk));

export default AppStore;
