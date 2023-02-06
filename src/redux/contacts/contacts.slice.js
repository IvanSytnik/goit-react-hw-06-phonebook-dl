import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsInitState } from './contacts.init-state'

const contactsSlice = createSlice({
    name: 'UserContacts',
    initialState: contactsInitState,
    reducers: {
        nameAction: (state, { payload }) => {
        state.name = payload;
      },
      numberAction: (state, { payload }) => {
        state.number = payload;
      },
      filterContactAction: (state, { payload }) => {
        state.filter = payload;
      },
      addContactAction: (state, { payload }) => {
        state.contacts = [payload, ...state.contacts];
      },
      deleteContactAction: (state, { payload }) => {
        state.contacts = state.contacts.filter(contact => contact.id !== payload);
      },
    },
  });

export const { nameAction, numberAction, filterContactAction, addContactAction, deleteContactAction, } = contactsSlice.actions;
const persistConfig = {
    key: 'goit',
    storage,
    whitelist: ['contacts'],
    // blacklist: ['search'],
  };
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
