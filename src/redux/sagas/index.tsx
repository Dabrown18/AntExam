import { all } from 'redux-saga/effects';
import antSaga from './AntSaga';

export default function* rootSaga() {
  yield all([
    antSaga(),
  ]);
}
