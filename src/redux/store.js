// import { configureStore } from '@reduxjs/toolkit';

// import rootReducer from './root-reducer';

// const store = configureStore({
//   reducer: rootReducer,

// });

// export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import {contactsReducer} from './contacts/contacts-slice';
import { authReducer } from './auth/auth-slice';
import filterReducer from './filter/filter-slice';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer,
      filter: filterReducer,
    },
    middleware, 
    devTools: process.env.NODE_ENV === 'development',
  
});
  
export const persistor = persistStore(store);



