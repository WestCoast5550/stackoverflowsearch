import { connect } from "react-redux";
import results from "../../components/results/results";

import {
  resultsSelector,
  querySelector,
  quicklookSelector,
  loadingSelector
} from "./selectors";

import { search, quickLook, getAnswers } from "../../middleware/ducks";

const mapStateToProps = state => ({
  results: resultsSelector(state),
  query: querySelector(state),
  quicklook: quicklookSelector(state),
  loading: loadingSelector(state)
});

const mapDispatchToProps = {
  onSearch: search,
  onQuickLook: quickLook,
  onGetAnswers: getAnswers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(results);
