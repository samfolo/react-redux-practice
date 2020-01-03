import * as actionTypes from '../actions';

const initialState = {
  results: [],
}

const resultsReducer = (state = initialState, action) => {
  let updatedResults;

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      updatedResults = [...state.results];
      const result = action.result;
      updatedResults.push(result);

      return {
        ...state,
        results: updatedResults,
      }

    case actionTypes.DELETE_RESULT:
      updatedResults = [...state.results];
      updatedResults = updatedResults.filter((res, i) => i !== action.index);
      return {
        ...state,
        results: updatedResults,
      }

    default:
  }

  return state;
}



export default resultsReducer;
