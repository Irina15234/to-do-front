import { api } from './api';
import { Board, Task } from '../slices/types';

export const getBoards = async (): Promise<Board[]> => {
  try {
    const response = await api.get(`/boards`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await api.get(`/tasks`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
