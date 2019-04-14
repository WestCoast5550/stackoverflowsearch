import { connect } from "react-redux";
import results from "../../components/results/results";

import { resultsSelector, querySelector, quicklookSelector } from "./selectors";

import { search, quickLook, getAnswers } from "../../middleware/ducks";

const mapStateToProps = state => ({
  results: resultsSelector(state),
  query: querySelector(state),
  quicklook: quicklookSelector(state)
});

const mapDispatchToProps = dispatch => ({
  onSearch: payload => {
    dispatch(search(payload));
  },
  onQuickLook: payload => {
    dispatch(quickLook(payload));
  },
  onGetAnswers: payload => {
    dispatch(getAnswers(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(results);
