import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonSettings, DeleteInfo, Snackbar } from '../types';

const commonInitialState: CommonSettings = {
  snackbar: {
    open: false,
    message: '',
    variant: 'error'
  },
  deleteInfo: {
    title: '',
    body: '',
    onDelete: () => null
  }
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
    setDeleteInfo: (state, { payload }: PayloadAction<DeleteInfo>) => {
      state.deleteInfo = payload;
      return state;
    },
    resetDeleteInfo: (state) => {
      state.deleteInfo = {
        title: '',
        body: '',
        onDelete: () => null
      };
      return state;
    }
  }
});

export const commonReducer = commonSlice.reducer;

export const {
  setSnackbar: setSnackbarAction,
  resetSnackbar: resetSnackbarAction,
  setDeleteInfo: setDeleteInfoAction,
  resetDeleteInfo: resetDeleteInfoAction
} = commonSlice.actions;
