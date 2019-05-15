import { all, fork } from 'redux-saga/effects';
import { watchFetchPostSaga } from './Post';
import { watchSavetUserSaga } from './Auth';

export default function* rootSaga() {
    yield all([
      fork(watchFetchPostSaga),
      fork(watchSavetUserSaga),
    ]);
  }