const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {
  let updatedResults;

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      }
    case 'STORE_RESULT':
        updatedResults = [...state.results];
        const result = state.counter;
        updatedResults.push(result);

        return {
          ...state,
          results: updatedResults,
        }
      case 'DELETE_RESULT':
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

export default reducer