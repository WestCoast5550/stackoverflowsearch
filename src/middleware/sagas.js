import { takeLatest, getContext, call } from "redux-saga/effects";
import { SEARCH } from "./ducks";

export default function*() {
  yield takeLatest(SEARCH, searchSaga);
}

export function* searchSaga({ payload }) {
  const api = yield getContext("api");
  const { response } = yield call(api.app.search, payload);
  if (response) {
    console.log(response);
    //window.location = "/";
  }
}
