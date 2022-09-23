import { BoardTask, CreateViewTask, MainViewTask, Task } from '../slices/types';
import { api } from './api';
import { TaskView } from '../common/enums';

const TASK_API = 'task';

export const getTasksList = async (): Promise<MainViewTask[]> => {
  try {
    const response = await api.get(`/${TASK_API}/list`, { params: { view: TaskView.main } });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getTaskById = async (id: number): Promise<Task> => {
  try {
    const response = await api.get(`/${TASK_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getTasksByBoard = async (boardId: number): Promise<BoardTask[]> => {
  try {
    const response = await api.get(`/${TASK_API}/list`, { params: { boardId, view: TaskView.board } });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const createTask = async (data: CreateViewTask): Promise<number> => {
  try {
    const response = await api.post(`/${TASK_API}/new`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const updateTaskById = async (data: Task) => {
  try {
    const response = await api.put(`/${TASK_API}/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const deleteTaskById = async (id: number) => {
  try {
    const response = await api.delete(`/${TASK_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const updateTaskColumn = async (sourceColumnId: number, targetColumnId: number, taskId: number) => {
  try {
    const response = await api.put(`/${TASK_API}/columns`, {
      sourceColumnId,
      targetColumnId,
      taskId
    });

    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
