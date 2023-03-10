import { configureStore } from '@reduxjs/toolkit';

// import authReducer from './auth/auth-slice';
// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-slice';

// const store = configureStore ({
//   reduser: {
//     authReducer,
//     contactsReducer,
//     filterReducer,
//   }
// })

import rootReducer from './root-reducer';

const store = configureStore({
  reducer: rootReducer,

});

export default store;


