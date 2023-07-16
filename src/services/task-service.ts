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

export const updateTaskField = async (field: string, value: unknown, id: number) => {
  try {
    const response = await api.put(`/${TASK_API}/update/${id}`, { field, value });
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

export const updateTaskColumn = async (
  sourceColumnId: number,
  targetColumnId: number,
  taskId: number,
  boardId: number
) => {
  try {
    const response = await api.put(`/${TASK_API}/columns`, {
      sourceColumnId,
      targetColumnId,
      taskId,
      boardId
    });

    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
