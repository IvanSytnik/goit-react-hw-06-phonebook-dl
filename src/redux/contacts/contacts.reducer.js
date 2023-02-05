import { combineReducers } from 'redux';
import {NAME_USER, NUMBER_USER, ADD_CONTACT, DELETE_CONTACT, FILTER_USER} from './contacts.types'
import { contactsInitState } from './contacts.init-state';


const contactsNameReducer = (state = contactsInitState.name, {type, payload  }) => {
    switch (type) {
        case NAME_USER:
          return payload;
    
        default:
          return state;
      }
}

const contactsNumberReducer = (state = contactsInitState.number, {type, payload  }) => {
    switch (type) {
        case NUMBER_USER:
          return payload;
    
        default:
          return state;
      }
}

const contactReducer = (state = contactsInitState.contacts, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return state=[payload, ...state];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);  
    default:
      return state;
  }
};

const contactsFilterReducer = (state = contactsInitState.filter, { type, payload }) => {
  switch (type) {
    case FILTER_USER:
      return payload;

    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  contacts: contactReducer,
  filter: contactsFilterReducer,
  name: contactsNameReducer,
  number: contactsNumberReducer
});