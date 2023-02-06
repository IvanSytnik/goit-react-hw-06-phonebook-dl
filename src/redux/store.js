// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts/contacts.init-state';
import { contactsReducer } from './contacts/contacts.slice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const initState = {
    usersContacts: contactsInitState, 
};

// const rootReducer = combineReducers({
//     usersContacts: contactsReducer,
// });

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, initState, enhancer);
export const store = configureStore({
    reducer: {usersContacts: contactsReducer},
    devTools: true,
    preloadedState: initState,

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);
