import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { middleware } from './navigation/navigators';

let logger = createLogger({
  timestamps: true,
  duration: true
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger, middleware))
);

export default store;