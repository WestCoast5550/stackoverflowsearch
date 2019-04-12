import { createDuck } from "redux-duck";

const ducks = createDuck("counter");

export const SEARCH = ducks.defineType("SEARCH");
export const search = ducks.createAction(SEARCH);

const initialState = {};

export default ducks.createReducer({}, initialState);
