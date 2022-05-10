import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board, MainPage, Task } from '../types';

const mainPageInitialState: MainPage = {
  boards: [],
  tasks: []
};

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState: mainPageInitialState,
  reducers: {
    setMainPage: (state, { payload }: PayloadAction<MainPage>) => {
      state = { ...payload };
      return state;
    },
    setBoards: (state, { payload }: PayloadAction<Board[]>) => {
      state.boards = { ...payload };
      return state;
    },
    setTasks: (state, { payload }: PayloadAction<Task[]>) => {
      state.tasks = { ...payload };
      return state;
    }
  }
});

export const mainPageReducer = mainPageSlice.reducer;

export const {
  setMainPage: setMainPageAction,
  setBoards: setBoardsAction,
  setTasks: setTasksAction
} = mainPageSlice.actions;
