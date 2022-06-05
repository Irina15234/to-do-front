import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from '../types';

const boardInitialState: Board = {
  id: null,
  name: '',
  columns: []
};

const boardSlice = createSlice({
  name: 'board',
  initialState: boardInitialState,
  reducers: {
    setBoard: (state, { payload }: PayloadAction<Board>) => {
      state = { ...payload };
      return state;
    },
    setBoardId: (state, { payload }: PayloadAction<number>) => {
      state.id = payload;
      return state;
    }
  }
});

export const boardReducer = boardSlice.reducer;

export const { setBoard: setBoardAction, setBoardId: setBoardIdAction } = boardSlice.actions;
