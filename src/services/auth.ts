import { api } from './api';

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post(`auth`, { username, password });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
