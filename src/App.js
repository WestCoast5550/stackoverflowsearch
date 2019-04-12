import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./middleware/searchConnected";
import Results from "./results";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Search} />
      <Route path="/results" component={Results} />
    </Router>
  );
}

export default AppRouter;
