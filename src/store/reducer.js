const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {

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
        const updatedResults = [...state.results];
        const result = state.counter;
        updatedResults.push(result);
        
        return {
          ...state,
          results: updatedResults,
        }
    default:
  }

  return state;
}

export default reducer