import { api } from './api';
import { User } from '../slices/types';

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post(`auth`, { username, password });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getUserInfo = async (): Promise<User> => {
  try {
    const response = await api.get(`user`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
