import * as actionTypes from '../actions';

const initialState = {
  persons: [],
}

const personsReducer = (state = initialState, action) => {
  let updatedPersons;

  switch (action.type) {
    case actionTypes.ON_DELETE:
      updatedPersons = [...state.persons];
      updatedPersons = updatedPersons.filter(person => person.id !== action.id);
      return {
        ...state,
        persons: updatedPersons,
      }

    case actionTypes.ON_ADD:
      const newPerson = {
        id: Math.random(),
        name: action.payload.name || 'Sam',
        age: action.payload.age || Math.floor( Math.random() * 40 )
      }
      updatedPersons = [...state.persons];
      updatedPersons = updatedPersons.concat(newPerson);
      return {
        ...state,
        persons: updatedPersons,
      }

    default:
  }

  return state;
}

export default personsReducer;
