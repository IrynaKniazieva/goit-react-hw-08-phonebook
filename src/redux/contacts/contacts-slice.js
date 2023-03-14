import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, fetchAddContact, fetchDeleteContact } from './contacts-operations';

function isPendingAction(action) {
    return action.type.endsWith('pending');
  }
  
  function RejectedAction(action) {
    return action.type.endsWith('rejected');
  }
  
  function FulfilledAction(action) {
    action.type.endsWith('fulfilled');
  }
  
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
  
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchAddContact.fulfilled, (state, action) => {
          state.items = [...state.items, action.payload];
          state.isLoading = false;
        })
        .addCase(fetchDeleteContact.fulfilled, (state,action) => ({
           items: state.items.filter(contact => contact.id !== action.payload.id),
           isLoading: false,
        }))
        .addMatcher(isPendingAction, (state, action) => {
          state.isLoading = true;
          state.error = null;
        })
        .addMatcher(RejectedAction, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addMatcher(FulfilledAction, (state, action) => {
          state.isLoading = false;
          state.error = null;
        })
      }
  });
  
  export const contactsReducer = contactsSlice.reducer;

// import {fetchAllContactsLoading, fetchAllContactsSuccess, fetchAllContactsError, fetchAddContactLoading, fetchAddContactSuccess, fetchAddContactError, fetchDeleteContactLoading, fetchDeleteContactSuccess, fetchDeleteContactError} from "./contacts-actions";

// const initialState = {
//     items: [],
//     loading: false,
//     error: null,
// }

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState,
//     extraReducers: (builder) => {
//         builder
//         .addCase(fetchContacts.pending, (store) => {
//             store.loading = true;
//         })
//         .addCase(fetchContacts.fulfilled, (store, {payload}) =>{
//             store.loading = false;
//             store.items = payload;
//         })
//         .addCase(fetchContacts.rejected, (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         })
//         .addCase(fetchAddContact.pending, (store) => {
//             store.loading = true;
//         })
//         .addCase(fetchAddContact.fulfilled, (store, {payload}) =>{
//             store.loading = false;
//             store.items.push(payload);
//         })
//         .addCase(fetchAddContact.rejected, (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         })
//         .addCase(fetchDeleteContact.pending, (store) => {
//             store.loading = true;
//         })
      
//         .addCase(fetchDeleteContact.fulfilled, (store, {payload}) =>{
//             store.loading = false;
//             const index = store.items.findIndex(item => item.id === payload);
//             store.items.splice(index, 1);
//         })
//         .addCase(fetchDeleteContact.rejected, (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         })
//     }
// })



// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
