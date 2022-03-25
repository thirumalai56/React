import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';
import Sagas from '../sagas/Sagas';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from '../reducers';
const sagaMiddleWare =  createSagaMiddleWare();
const AppStore = createStore(rootReducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(Sagas);

export default AppStore;
