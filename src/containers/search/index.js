import { connect } from "react-redux";
import Search from "../../components/search/search";

import { search } from "../../middleware/ducks";

const mapDispatchToProps = {
  onSearch: search
};

export default connect(
  undefined,
  mapDispatchToProps
)(Search);
