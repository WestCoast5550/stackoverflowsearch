import {
  takeLatest,
  getContext,
  call,
  put,
  select,
  takeEvery
} from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  SEARCH,
  QUICK_LOOK,
  GET_ANSWERS,
  getAnswers,
  searchSucsess,
  setQuery,
  setQuicklook,
  setAnswers,
  search,
  quickLook
} from "./ducks";

import { LOCATION_CHANGE } from "connected-react-router";

import { searchSelector, pathnameSelector } from "../helpers/globalSelectors";

import queryString from "query-string";

export default function*() {
  yield put(push("/"));
  yield takeLatest(SEARCH, searchSaga);
  yield takeLatest(QUICK_LOOK, quickLookSaga);
  yield takeLatest(GET_ANSWERS, getAnswersSaga);
  yield takeEvery(LOCATION_CHANGE, locationChangeSaga);
}

export function* locationChangeSaga() {
  const searchParamsSelector = yield select(searchSelector);
  const pathname = yield select(pathnameSelector);
  const searchParams = queryString.parse(searchParamsSelector);
  switch (pathname) {
    case "/results":
      if (searchParams.tittle) {
        yield put(search(searchParams.tittle));
        if (searchParams.tag) {
          yield put(quickLook({ type: "tag", value: searchParams.tag }));
        }
        if (searchParams.questions) {
          yield put(
            quickLook({ type: "questions", value: searchParams.questions })
          );
        }
      } else yield put(push("/"));
      break;
    case "/answers":
      if (searchParams.question) {
        yield put(getAnswers(searchParams.question));
      } else yield put(push("/"));
      break;
    default:
      if (pathname !== "/") yield put(push("/"));
  }
}

export function* searchSaga({ payload }) {
  const api = yield getContext("api");
  const { response } = yield call(api.app.search, payload);
  const searchParams = yield select(searchSelector);
  if (response) {
    const { items } = response;
    yield put(searchSucsess(items));
    yield put(setQuery(payload));
    const queryParams = { ...queryString.parse(searchParams), tittle: payload };
    if (payload !== queryString.parse(searchParams).tittle) {
      yield put(
        push({
          pathname: "/results",
          search: `?${queryString.stringify(queryParams)}`
        })
      );
    }
  } else console.error("error occured");
}

export function* quickLookSaga({ payload }) {
  const { type, value } = payload;
  const api = yield getContext("api");
  const { response } = yield call(api.app[type], value);
  const searchParams = yield select(searchSelector);
  const queryParams = { tittle: queryString.parse(searchParams).tittle };
  queryParams[type] = value;

  if (response) {
    const { items } = response;
    yield put(setQuicklook(items));
    if (
      (!queryString.parse(searchParams).questions &&
        !queryString.parse(searchParams).tag) ||
      (type === "questions" &&
        queryString.parse(searchParams).questions &&
        value !== queryString.parse(searchParams).questions) ||
      (type === "tag" &&
        queryString.parse(searchParams).tag &&
        value !== queryString.parse(searchParams).tag)
    ) {
      yield put(
        push({
          pathname: "/results",
          search: `?${queryString.stringify(queryParams)}`
        })
      );
    }
  } else console.error("error occured");
}

export function* getAnswersSaga({ payload }) {
  const api = yield getContext("api");
  const { response } = yield call(api.app.answers, payload);
  const searchParams = yield select(searchSelector);
  if (response) {
    const { items } = response;
    yield put(setAnswers(items));
    const queryParams = {
      question: payload
    };
    if (payload !== queryString.parse(searchParams).question) {
      yield put(
        push({
          pathname: "/answers",
          search: `?${queryString.stringify(queryParams)}`
        })
      );
    }
  } else console.error("error occured");
}
