import { all, fork } from 'redux-saga/effects';
import { watchFetchPostSaga } from './Post';
import { watchSaveUserSaga } from './Auth';

export default function* rootSaga() {
    yield all([
      fork(watchFetchPostSaga),
      fork(watchSaveUserSaga),
    ]);
  }