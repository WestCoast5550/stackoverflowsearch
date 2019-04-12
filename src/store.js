import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import AppReducer from "./middleware/ducks";
import axiosInstance from "./api/axiosInstance";
import api from "./api/index";

import mySaga from "./middleware/sagas";

export const history = createHistory();
const axios = axiosInstance();
const sagaMiddleware = createSagaMiddleware({
  context: {
    api: api(axios)
  }
});
const enhancers = [];
const initialState = {};
const middleware = [routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const rootReducer = combineReducers({
  AppReducer
});

const composedEnhancers = compose(
  applyMiddleware(...middleware, sagaMiddleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);
sagaMiddleware.run(mySaga);

export default store;
