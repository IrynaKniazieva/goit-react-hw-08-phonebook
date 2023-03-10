import { createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// // Utility to add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// /*
//  * POST @ /users/signup
//  * body: { name, email, password }
//  */
// export const signup = createAsyncThunk(
//   'auth/signup',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', credentials);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import * as api from '../../services/auth';

export const signup = createAsyncThunk (
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const {data: result} = await api.signup(data);
            return result;

        }
        catch({response}) {
            return rejectWithValue(response);

        }
    }
)