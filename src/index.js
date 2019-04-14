import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Search from "./connectedComponents/search";
import Results from "./connectedComponents/results";
import Answers from "./connectedComponents/answers";
import store, { history } from "./store";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/results" component={Results} />
        <Route path="/answers" component={Answers} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
