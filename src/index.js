import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultsReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching ', action);
      const result = next(action);
      console.log('[Middleware]', store.getState());
      return result
    }
  }
}

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
