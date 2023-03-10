import { createSlice } from '@reduxjs/toolkit';

import { signUp } from './auth-operations';

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

const authSlise = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(signUp.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signUp.fulfilled, (state, {payload}) =>{
            const {user, token} = payload;
            state.loading = false;
            state.user = user;
            state.token = token;
            state.isLogin = true; 
        })
        .addCase(signUp.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })

    }
})

export default authSlise.reducer;