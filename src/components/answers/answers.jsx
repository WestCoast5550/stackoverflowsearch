import React from "react";
import { Card, CircularProgress } from "@material-ui/core";
import "./answers.css";

export default ({ answers, loading }) =>
  loading ? (
    <div className="loaderWrapper">
      <CircularProgress />
    </div>
  ) : (
    answers.map(item => (
      <Card className="card" key={item.answer_id}>
        {<div dangerouslySetInnerHTML={{ __html: item.body }} />}
      </Card>
    ))
  );
