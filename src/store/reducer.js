import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {
  let updatedResults;

  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      }
    case actionTypes.STORE_RESULT:
        updatedResults = [...state.results];
        const result = state.counter;
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

export default reducer;