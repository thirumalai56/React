import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginSagas from 'RootSaga';
import rootReducer from '../reducers';
const sagaMiddleWare = createSagaMiddleware();
const AppStore = createStore(rootReducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(loginSagas);
export default AppStore;
