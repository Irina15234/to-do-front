import { api } from './api';

export const test1 = async () => {
  try {
    const response: any = await api.get('/api/users');
    return response.data;
  } catch (error: any) {
    console.error(`Request failed: ${error.status}`);
    throw error;
  }
};
