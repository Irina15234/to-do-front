import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonSettings, ReplyComment, Snackbar } from '../types';
import { WsStatus } from '../../common/enums';

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
  },
  isOpenAddTaskModal: false,
  taskParentId: undefined,
  isOpenUsersBoardDialog: false,
  status: WsStatus.actual
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
    },
    toggleOpenAddTaskModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenAddTaskModal = payload;
      return state;
    },
    setTaskParentId: (state, { payload }: PayloadAction<number>) => {
      state.taskParentId = payload;
      return state;
    },
    toggleOpenUsersBoardDialog: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenUsersBoardDialog = payload;
      return state;
    },
    setStatus: (state, { payload }: PayloadAction<WsStatus>) => {
      state.status = payload;
      return state;
    }
  }
});

export const commonReducer = commonSlice.reducer;

export const {
  setSnackbar: setSnackbarAction,
  resetSnackbar: resetSnackbarAction,
  setOpenPanel: setOpenPanelAction,
  setReplyComment: setReplyCommentAction,
  toggleOpenAddTaskModal: toggleOpenAddTaskModalAction,
  setTaskParentId: setTaskParentIdAction,
  toggleOpenUsersBoardDialog: toggleOpenUsersBoardDialogAction,
  setStatus: setStatusAction
} = commonSlice.actions;
