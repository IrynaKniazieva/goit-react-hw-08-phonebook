
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch ({ error}) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
      try {
          const response = await axios.post('/contacts', { name, number });
          return response.data;
      } catch (error) {
          // toast.error('Something went wrong. Please try again.')
          return thunkAPI.rejectWithValue(error.message);
      }
  }
);

export const fetchDeleteContact  = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      console.log(contactId)
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

