import watchUserLogin, { watchGoogleBooksByQuerySaga } from './watchers';
import {fork,all} from 'redux-saga/effects';
export default function* Sagas() {
    yield fork(watchUserLogin);
    yield fork(watchGoogleBooksByQuerySaga);
  }