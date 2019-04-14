import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import AppReducer from "./middleware/ducks";
import axiosInstance from "./api/axiosInstance";
import api from "./api/index";

import mySaga from "./middleware/sagas";

export const history = createBrowserHistory();
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
  App: AppReducer,
  router: connectRouter(history)
});

const composedEnhancers = compose(
  applyMiddleware(...middleware, sagaMiddleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);
sagaMiddleware.run(mySaga);

export default store;
