import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainPage } from '../types';

const mainPageInitialState: MainPage = {};

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState: mainPageInitialState,
  reducers: {
    setMainPage: (state, { payload }: PayloadAction<MainPage>) => {
      state = payload;
    }
  }
});

export const mainPageReducer = mainPageSlice.reducer;

export const { setMainPage: setMainPageAction } = mainPageSlice.actions;
