import {NAME_USER, NUMBER_USER, ADD_CONTACT, DELETE_CONTACT, FILTER_USER} from './contacts.types'
export const nameAction = payload => ({ type: NAME_USER, payload });
export const numberAction = payload => ({ type: NUMBER_USER, payload });
export const addContactAction = payload => ({ type: ADD_CONTACT, payload });
export const deleteContactAction = payload => ({ type: DELETE_CONTACT, payload });
export const filterContactAction = payload => ({ type: FILTER_USER, payload });

