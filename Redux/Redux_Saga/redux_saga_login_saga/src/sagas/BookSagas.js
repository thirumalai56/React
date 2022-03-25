//import { delay } from "redux-saga";
import {
  call,
  put,
  take,
  takeLatest
} from "redux-saga/effects";
import {
  googleBooksByQueryComplete,
  googleBooksByQueryError
} from "../actions/bookActions";
import { fetchGoogleBooksByQuery } from "../api/bookApi";

import * as types from '../constants/actionTypes';

export function* fetchGoogleBooksByQuerySaga(action) {
  try {
   // yield call(delay, 500);
    //yield put(push("/"));
    const search = yield call(fetchGoogleBooksByQuery, action.payload);
    yield put(googleBooksByQueryComplete(search));
  } catch (error) {
    yield put(googleBooksByQueryError(error));
  }
}

export function* watchLatestGoogleBooksByQuerySaga() {
    yield takeLatest(types.GOOGLE_BOOKS_QUERY, fetchGoogleBooksByQuerySaga);
  }