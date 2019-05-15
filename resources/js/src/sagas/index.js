import { all, fork } from 'redux-saga/effects';
import { watchFetchPostSaga } from './Post';

export default function* rootSaga() {
    yield all([
      fork(watchFetchPostSaga),
    ]);
  }