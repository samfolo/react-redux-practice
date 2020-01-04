import * as actionTypes from './actionTypes';

export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result,
  }
}

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().counter.counter;
      // console.log(oldCounter); // use a second argument if you need access to the state (combined)

      dispatch(saveResult(result));
    }, 2000);
  }
}

export const deleteResult = index => {
  return {
    type: actionTypes.DELETE_RESULT,
    index: index,
  }
}
