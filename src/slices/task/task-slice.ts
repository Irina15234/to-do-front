import { Task } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const taskInitialState: Task = {
  authorId: 0,
  boardId: 0,
  columnId: 0,
  date: '',
  executorId: null,
  id: null,
  name: '',
  priorityName: ''
};

const taskSlice = createSlice({
  name: 'task',
  initialState: taskInitialState,
  reducers: {
    setTask: (state, { payload }: PayloadAction<Task>) => {
      state = { ...payload };
      return state;
    }
  }
});

export const taskReducer = taskSlice.reducer;

export const { setTask: setTaskAction } = taskSlice.actions;
