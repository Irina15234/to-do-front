import { api } from './api';
import { MainViewBoard, MainViewTask } from '../slices/types';
import { TaskView } from '../common/enums';

export const getBoards = async (): Promise<MainViewBoard[]> => {
  try {
    const response = await api.get(`/boards`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getTasks = async (): Promise<MainViewTask[]> => {
  try {
    const response = await api.get(`/tasks`, { params: { view: TaskView.main } });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
