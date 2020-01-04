import * as actionCreators from '../actions/actions';

const initialState = {
  counter: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.increment().type:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case actionCreators.decrement().type:
      return {
        ...state,
        counter: state.counter - 1,
      }

    case actionCreators.add().type:
      return {
        ...state,
        counter: state.counter + action.value,
      }

    case actionCreators.subtract().type:
      return {
        ...state,
        counter: state.counter - action.value,
      }

    default:
  }

  return state;
}

export default counterReducer;
