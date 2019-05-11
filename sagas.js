import { all } from 'redux-saga/effects'
import HomePage from 'containers/HomePage/sagas';

function* root() {
  yield all([
    HomePage(),
  ])
}

export default root;