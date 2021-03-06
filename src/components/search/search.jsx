import React, { useState } from "react";
import "./search.css";
import { InputBase, Button, CircularProgress } from "@material-ui/core";

import logo from "../../logo.svg";

export default ({ onSearch, loading }) => {
  const [searchValue, setSearchValue] = useState("");
  return loading ? (
    <div className="loaderWrapper">
      <CircularProgress />
    </div>
  ) : (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSearch(searchValue);
      }}
    >
      <div className="Search">
        <img src={logo} className="logo" alt="logo" />
        <InputBase
          className="input"
          variant="outlined"
          placeholder="Type anything.."
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
        <div className="searchButton">
          <Button
            className="button"
            type="submit"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};
