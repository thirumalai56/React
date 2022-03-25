import  loginSaga  from './LoginSagas';
import {
  call,
  take,
  takeLatest
} from "redux-saga/effects";
import * as types from '../constants/actionTypes';
import {fetchGoogleBooksByQuerySaga} from './BookSagas';

export default function* watchUserLogin() {
  
  yield takeLatest(types.LOGIN, loginSaga);
 
}
export  function* watchGoogleBooksByQuerySaga() {
 /* while (true) {
    const search = yield take(types.GOOGLE_BOOKS_QUERY);
    yield call(watchLatestGoogleBooksByQuerySaga, search);
  }*/
  yield takeLatest(types.GOOGLE_BOOKS_QUERY, fetchGoogleBooksByQuerySaga);
}

/*
export function* watchLatestGoogleBooksByQuerySaga() {
  yield takeLatest(types.GOOGLE_BOOKS_QUERY, fetchGoogleBooksByQuerySaga);
}*/