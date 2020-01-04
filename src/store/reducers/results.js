import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
// import * as actionCreators from '../actions';

const initialState = {
  results: [],
}

let updatedResults;

const storeResult = (state, action) => {
  updatedResults = [...state.results];
  const result = action.result;
  updatedResults.push(result);
  return updatedResults;
}

const deleteResult = (state, action) => {
  updatedResults = [...state.results];
  updatedResults = updatedResults.filter((res, i) => i !== action.index);
  return updatedResults;
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT : return updateObject(state, {results: storeResult(state, action)});
    case actionTypes.DELETE_RESULT : return updateObject(state, {results: deleteResult(state, action)});
    default : return state;
  }
}

export default resultsReducer;
