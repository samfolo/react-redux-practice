export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const add = val => {
  return {
    type: 'ADD',
    value: val,
  }
}

export const subtract = val => {
  return {
    type: 'SUBTRACT',
    value: val,
  }
}

export const storeResult = result => {
  return {
    type: 'STORE_RESULT',
    result: result,
  }
}

export const deleteResult = id => {
  return {
    type: 'DELETE_RESULT',
    id: id,
  }
}
