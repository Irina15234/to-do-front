import { Board, MainViewBoard } from '../slices/types';
import { api } from './api';

const BOARD_API = 'board';

export const getBoardsList = async (): Promise<MainViewBoard[]> => {
  try {
    const response = await api.get(`/${BOARD_API}/list`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getBoardById = async (id: number): Promise<Board> => {
  try {
    const response = await api.get(`/${BOARD_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const createBoard = async (data: Board): Promise<Board> => {
  try {
    const response = await api.post(`/${BOARD_API}/new`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const updateBoardById = async (data: Board) => {
  try {
    const response = await api.put(`/${BOARD_API}/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const deleteBoardById = async (id: number) => {
  try {
    const response = await api.delete(`/${BOARD_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
