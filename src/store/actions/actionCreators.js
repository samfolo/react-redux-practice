import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const add = val => {
  return {
    type: actionTypes.ADD,
    value: val,
  }
}

export const subtract = val => {
  return {
    type: actionTypes.SUBTRACT,
    value: val,
  }
}

export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result,
  }
}

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  }
}

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id,
  }
}
