import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonSettings, ReplyComment, Snackbar } from '../types';

const commonInitialState: CommonSettings = {
  snackbar: {
    open: false,
    message: '',
    variant: 'error'
  },
  isOpenSidePanel: false,
  replyComment: {
    commentId: null,
    commentText: ''
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
    setOpenPanel: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenSidePanel = payload;
      return state;
    },
    setReplyComment: (state, { payload }: PayloadAction<ReplyComment>) => {
      state.replyComment = payload;
      return state;
    }
  }
});

export const commonReducer = commonSlice.reducer;

export const {
  setSnackbar: setSnackbarAction,
  resetSnackbar: resetSnackbarAction,
  setOpenPanel: setOpenPanelAction,
  setReplyComment: setReplyCommentAction
} = commonSlice.actions;
