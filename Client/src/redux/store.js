import {
  compose,
  combineReducers,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import { authReducer } from './LoginReducer/authReducer';
import { reducer as postReducer } from "./postReducer/reducer";

const rootReducer = combineReducers({
  authReducer
  postReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);