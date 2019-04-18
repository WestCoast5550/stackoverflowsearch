import React from "react";
import "./results.css";
import { Typography, CircularProgress } from "@material-ui/core";
import ItemsList from "./itemsList";

export default ({
  results,
  query,
  quicklook,
  onQuickLook,
  onGetAnswers,
  loading
}) =>
  loading ? (
    <div className="loaderWrapper">
      <CircularProgress />
    </div>
  ) : (
    <div className="App">
      <div className="flex">
        <div className="results">
          <Typography variant="h3">Results by query: {query}</Typography>
          <ItemsList
            results={results}
            onQuickLook={onQuickLook}
            disabled={false}
            onGetAnswers={onGetAnswers}
          />
        </div>
        {quicklook.length > 0 ? (
          <div className="quicklook">
            <Typography variant="h3">Quick look</Typography>
            <ItemsList results={quicklook} disabled={true} />
          </div>
        ) : null}
      </div>
    </div>
  );
