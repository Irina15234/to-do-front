import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

const userInitialState: User = {
  id: null,
  name: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state = { ...payload };
      return state;
    }
  }
});

export const userReducer = userSlice.reducer;

export const { setUser: setUserAction } = userSlice.actions;
