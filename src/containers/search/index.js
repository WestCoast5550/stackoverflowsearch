import { connect } from "react-redux";
import Search from "../../components/search/search";

import { search } from "../../middleware/ducks";

import { loadingSelector } from "./selectors";

const mapDispatchToProps = {
  onSearch: search
};

const mapStateToProps = state => ({
  loading: loadingSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
