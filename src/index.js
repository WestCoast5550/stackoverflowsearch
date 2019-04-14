import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Search from "./containers/search";
import Results from "./containers/results";
import Answers from "./containers/answers";
import store, { history } from "./middleware/store";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" key="search" exact component={Search} />
        <Route path="/results" key="results" component={Results} />
        <Route path="/answers" key="answers" component={Answers} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
