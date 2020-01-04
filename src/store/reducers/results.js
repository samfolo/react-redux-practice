import * as actionCreators from '../actions/actions';

const initialState = {
  results: [],
}

const resultsReducer = (state = initialState, action) => {
  let updatedResults;

  switch (action.type) {
    case actionCreators.storeResult().type:
      updatedResults = [...state.results];
      const result = action.result;
      updatedResults.push(result);

      return {
        ...state,
        results: updatedResults,
      }

    case actionCreators.deleteResult().type:
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
