import { Priority, Role } from '../slices/types';
import { api } from './api';

const DICTIONARY_API = 'dictionary';

export const getPriorities = async (): Promise<Priority[]> => {
  try {
    const response = await api.get(`/${DICTIONARY_API}/priority`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getRoles = async (): Promise<Role[]> => {
  try {
    const response = await api.get(`/${DICTIONARY_API}/roles`);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
