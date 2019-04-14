import { connect } from "react-redux";
import results from "../../components/answers/answers";

import { answersSelector } from "./selectors";

const mapStateToProps = state => ({
  answers: answersSelector(state)
});

export default connect(
  mapStateToProps,
  undefined
)(results);
