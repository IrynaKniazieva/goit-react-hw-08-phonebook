import { createSlice } from '@reduxjs/toolkit';

import { logIn, logOut, refreshUser, register } from './auth-operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
    builder
    .addCase(register.pending, (state, action) => state) 
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
    .addCase(register.rejected, (state, action) => state)
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
    .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
    })
    
})

export const authReducer = authSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';
// import { signup, logIn, logOut, refreshUser } from './auth-operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [signup.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// import { signup } from "./auth-operations";

// const initialState = {
//     user: { name: '', email: '' },
//     token: "",
//     isLogin: false,
//     loading: false,
//     error: null,
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     extraReducers: builder => {
//         builder
//         .addCase(signup.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(signup.fulfilled, (state, {payload}) => {
//             const {user, token} = payload;
//             state.loading = false;
//             state.user = user;
//             state.token = token;
//             state.isLogin = true;
//         })
//         .addCase(signup.rejected, (state, {payload}) => {
//             state.loading = false;
//             state.error = payload;
//         })
//         .addCase(login.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         })
//         .addCase(login.fulfilled, (state, {payload}) => {
//             const {user, token} = payload;
//             state.loading = false;
//             state.user = user;
//             state.token = token;
//             state.isLogin = true;
//         })
//         .addCase(login.rejected, (state, {payload}) => {
//             state.loading = false;
//             state.error = payload;
//         })
//     }
// })

// export default authSlice.reducer;