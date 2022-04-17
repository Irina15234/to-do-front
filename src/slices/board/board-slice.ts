import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types';

const boardInitialState: Board = {
  id: null,
  authorId: 0,
  name: '',
  userIds: [],
  columns: []
};

const boardSlice = createSlice({
  name: 'board',
  initialState: boardInitialState,
  reducers: {
    setBoard: (state, { payload }: PayloadAction<Board>) => {
      state = { ...payload };
      return state;
    }
  }
});

export const boardReducer = boardSlice.reducer;

export const { setBoard: setBoardAction } = boardSlice.actions;
