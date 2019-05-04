import { all, takeLatest } from 'redux-saga/effects';

import { Types as DevelopersTypes } from '../ducks/developers';
import { addDeveloper } from './developers';

export default function* rootSaga() {
  yield all([takeLatest(DevelopersTypes.ADD_REQUEST, addDeveloper)]);
}
