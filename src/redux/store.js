import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { contactsInitState } from './contacts/contacts.init-state';
import { contactsReducer } from './contacts/contacts.reducer';


const initState = {
    usersContacts: contactsInitState, 
};

const rootReducer = combineReducers({
    usersContacts: contactsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, initState, enhancer);