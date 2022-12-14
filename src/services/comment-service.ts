import { api } from './api';
import { PostComment, TaskComment } from '../slices/types';

const COMMENT_API = 'comment';

export const getComments = async (taskId: number): Promise<TaskComment[]> => {
  try {
    const response = await api.get(`/${COMMENT_API}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const createComment = async (data: PostComment) => {
  try {
    const response = await api.post(`/${COMMENT_API}/new`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
