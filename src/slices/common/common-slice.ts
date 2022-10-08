import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonSettings, Snackbar } from '../types';

const commonInitialState: CommonSettings = {
  snackbar: {
    open: false,
    message: '',
    variant: 'error'
  },
  isOpenSidePanel: false
};

const commonSlice = createSlice({
  name: 'common',
  initialState: commonInitialState,
  reducers: {
    setSnackbar: (state, { payload }: PayloadAction<Snackbar>) => {
      state.snackbar = payload;
      return state;
    },
    resetSnackbar: (state) => {
      state.snackbar.open = false;
      return state;
    },
    setOpenPanel: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenSidePanel = payload;
      return state;
    }
  }
});

export const commonReducer = commonSlice.reducer;

export const {
  setSnackbar: setSnackbarAction,
  resetSnackbar: resetSnackbarAction,
  setOpenPanel: setOpenPanelAction
} = commonSlice.actions;
