import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6578508af08799dc8044e406.mockapi.io/',
});

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get('/users', {
        params: {
          page,
          limit: 3,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
