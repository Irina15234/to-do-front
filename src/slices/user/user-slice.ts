import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

const initialUser: User = {
  id: -1,
  name: '',
  photo: null
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state = { ...payload };
      return state;
    },
    setUserPhoto: (state, { payload }: PayloadAction<string>) => {
      state.photo = payload;
      return state;
    }
  }
});

export const userReducer = userSlice.reducer;

export const { setUser: setUserAction, setUserPhoto: setUserPhotoAction } = userSlice.actions;
