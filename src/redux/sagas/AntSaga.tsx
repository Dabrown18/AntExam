import {put, call} from 'redux-saga/effects';
import apiHelper from '../../utils/apiHelper';
import {getAnts} from '../actions/action';
import {mockData} from '../../utils/mockData';

const query = `
  query {
    ants() {
      name
      length
      weight
      color
    }
  }
`;

const url = apiHelper.getAntsApi();
const opts = {
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({query}),
};

export function* fetchAnts() {
  try {
    const response = yield fetch(url, opts)
      .then(res => res.json())
      .then(console.log)
      .catch(console.error);

    const data = yield response.data;
    return yield put(getAnts(data));
  } catch (e) {
    return yield put(getAnts(mockData));
  }
}

function* antSaga() {
  const data = yield call(fetchAnts);
  return yield put(getAnts(data));
}

export default antSaga;
