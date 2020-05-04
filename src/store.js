import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import auth from './containers/app/auth-reducer';
import authSaga from './containers/app/auth-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  auth,
});

const rootSagas = function* rootSagas() {
  yield all([
    authSaga(),
  ]);
};

const configureStore = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSagas);

export default configureStore;
