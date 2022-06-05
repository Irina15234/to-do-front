import { Board } from '../slices/types';
import { api } from './api';

export const getBoardById = async (id: number): Promise<Board> => {
  try {
    const response = await api.get(`/board/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const newBoard = async (data: Board): Promise<Board> => {
  try {
    const response = await api.post(`/board/new`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const updateBoardById = async (data: Board) => {
  try {
    const response = await api.put(`/board/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const deleteBoardById = async (id: number) => {
  try {
    const response = await api.delete(`/board/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
