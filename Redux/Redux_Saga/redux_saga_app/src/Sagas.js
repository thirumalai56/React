import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), );    
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}

function* usersWatcher(){
    yield takeLatest('GET_USERS', fetchUsers);
}
function* fetchUsers() {
    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
          .then(response => response.json(), );    
    yield put({ type: "USERS_RECEIVED", json: json.articles, });
  }
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   usersWatcher()
   ]);
}