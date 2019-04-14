import { createDuck } from "redux-duck";

const ducks = createDuck("counter");

export const SEARCH = ducks.defineType("SEARCH");
export const search = ducks.createAction(SEARCH);

export const SEARCH_SUCSESS = ducks.defineType("SEARCH_SUCSESS");
export const searchSucsess = ducks.createAction(SEARCH_SUCSESS);

export const SET_QUERY = ducks.defineType("SET_QUERY");
export const setQuery = ducks.createAction(SET_QUERY);

export const QUICK_LOOK = ducks.defineType("QUICK_LOOK");
export const quickLook = ducks.createAction(QUICK_LOOK);

export const SET_QUCKLOOK = ducks.defineType("SET_QUCKLOOK");
export const setQuicklook = ducks.createAction(SET_QUCKLOOK);

export const GET_ANSWERS = ducks.defineType("GET_ANSWERS");
export const getAnswers = ducks.createAction(GET_ANSWERS);

export const SET_ANSWERS = ducks.defineType("SET_ANSWERS");
export const setAnswers = ducks.createAction(SET_ANSWERS);

const initialState = { results: [], query: "", quicklook: [], answers: [] };

export default ducks.createReducer(
  {
    [SEARCH_SUCSESS]: (state, { payload: results }) => ({
      ...state,
      results
    }),
    [SEARCH]: state => ({
      ...state,
      results: [],
      quicklook: [],
      answers: []
    }),
    [SET_QUERY]: (state, { payload: query }) => ({
      ...state,
      query
    }),
    [SET_QUCKLOOK]: (state, { payload: quicklook }) => ({
      ...state,
      quicklook
    }),
    [SET_ANSWERS]: (state, { payload: answers }) => ({
      ...state,
      answers
    })
  },
  initialState
);
