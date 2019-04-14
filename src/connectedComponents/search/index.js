import { connect } from "react-redux";
import Search from "../../components/search/search";

import { search } from "../../middleware/ducks";

const mapDispatchToProps = dispatch => ({
  onSearch: payload => {
    dispatch(search(payload));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(Search);
