import { takeLatest, getContext, call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  SEARCH,
  QUICK_LOOK,
  GET_ANSWERS,
  searchSucsess,
  setQuery,
  setQuicklook,
  setAnswers
} from "./ducks";

export default function*() {
  yield takeLatest(SEARCH, searchSaga);
  yield takeLatest(QUICK_LOOK, quickLookSaga);
  yield takeLatest(GET_ANSWERS, getAnswersSaga);
}

export function* searchSaga({ payload }) {
  const api = yield getContext("api");
  const { response } = yield call(api.app.search, payload);
  if (response) {
    const { items } = response;
    yield put(searchSucsess(items));
    yield put(setQuery(payload));
    yield put(push("/results"));
  }
}

export function* quickLookSaga({ payload }) {
  const { type, value } = payload;
  const api = yield getContext("api");
  const { response } = yield call(api.app[type], value);
  if (response) {
    const { items } = response;
    yield put(setQuicklook(items));
  }
}

export function* getAnswersSaga({ payload }) {
  const api = yield getContext("api");
  const { response } = yield call(api.app.answers, payload);
  if (response) {
    const { items } = response;
    yield put(setAnswers(items));
    yield put(push("/answers"));
  }
}
