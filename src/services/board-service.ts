import { Board, BoardColumn, FullViewBoardUser, MainViewBoard, User } from '../slices/types';
import { api } from './api';
import { BoardUserView } from '../common/enums';

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

export const updateBoardById = async (data: Board, deletedColumnsIds: number[]) => {
  try {
    const response = await api.put(`/${BOARD_API}/${data.id}`, { board: data, deletedColumnsIds });
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

export const getUsersByBoard = async (
  id: number,
  view: BoardUserView = BoardUserView.base
): Promise<User[] | FullViewBoardUser[]> => {
  try {
    const response = await api.get(`/${BOARD_API}/users/${id}`, { params: { view } });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const deleteColumnByBoard = async (columnId: number, boardId: number) => {
  try {
    const response = await api.delete(`/${BOARD_API}/column/del`, { data: { columnId, boardId } });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const renameColumn = async (column: BoardColumn, boardId: number) => {
  try {
    const response = await api.put(`/${BOARD_API}/column`, { column, boardId });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const renameBoard = async (boardId: number, boardName: string) => {
  try {
    const response = await api.put(`/${BOARD_API}/board`, { boardName, boardId });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const addColumn = async (column: BoardColumn, boardId: number) => {
  try {
    const response = await api.put(`/${BOARD_API}/column/add`, { column, boardId });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getColumnsByBoard = async (id: number): Promise<BoardColumn[]> => {
  try {
    const response = await api.get(`/${BOARD_API}/columns/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const changeBoardUsers = async (users: FullViewBoardUser[], boardId: number) => {
  try {
    const response = await api.put(`/${BOARD_API}/users/${boardId}`, users);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
