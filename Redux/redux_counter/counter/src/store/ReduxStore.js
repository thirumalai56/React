import {createStore} from 'redux';

import CounterReducer from '../reducer/CounterReducer';

const store = createStore(CounterReducer,0);

export default store;
