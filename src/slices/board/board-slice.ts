import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board, BoardTask } from '../types';

const boardInitialState: Board = {
  id: null,
  name: 'Board',
  columns: [],
  tasks: []
};

const boardSlice = createSlice({
  name: 'board',
  initialState: boardInitialState,
  reducers: {
    setBoard: (state, { payload }: PayloadAction<Board>) => {
      state = { ...payload, tasks: state.tasks };
      return state;
    },
    setBoardId: (state, { payload }: PayloadAction<number>) => {
      state.id = payload;
      return state;
    },
    setBoardTasks: (state, { payload }: PayloadAction<BoardTask[]>) => {
      state.tasks = payload;
      return state;
    }
  }
});

export const boardReducer = boardSlice.reducer;

export const {
  setBoard: setBoardAction,
  setBoardId: setBoardIdAction,
  setBoardTasks: setBoardTasksAction
} = boardSlice.actions;
