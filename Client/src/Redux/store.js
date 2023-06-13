import {
  compose,
  combineReducers,
  applyMiddleware,
  legacy_createStore
} from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './LoginReducer/authReducer';
import { productReducer } from './products/productReducer';

const rootReducer = combineReducers({
  // Add the reducers here...
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
