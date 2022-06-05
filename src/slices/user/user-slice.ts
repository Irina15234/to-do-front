import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state = { ...payload };
      return state;
    }
  }
});

export const userReducer = userSlice.reducer;

export const { setUser: setUserAction } = userSlice.actions;
