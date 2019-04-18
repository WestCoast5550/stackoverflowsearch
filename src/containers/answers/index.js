import { connect } from "react-redux";
import results from "../../components/answers/answers";

import { answersSelector, loadingSelector } from "./selectors";

const mapStateToProps = state => ({
  answers: answersSelector(state),
  loading: loadingSelector(state)
});

export default connect(mapStateToProps)(results);
