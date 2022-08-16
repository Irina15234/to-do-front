import { Task } from '../slices/types';
import { api } from './api';

export const getTaskById = async (id: number): Promise<Task> => {
  try {
    const response = await api.get(`/task/get/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const newTask = async (data: Task) => {
  try {
    const response = await api.post(`/task/new`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const updateTaskById = async (data: Task) => {
  try {
    const response = await api.put(`/task/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const deleteTaskById = async (id: number) => {
  try {
    const response = await api.delete(`/task/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const updateTaskColumn = async (sourceColumnId: number, targetColumnId: number, taskId: number) => {
  try {
    const response = await api.post(`/task/columns`, {
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