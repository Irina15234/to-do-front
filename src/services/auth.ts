import { api } from './api';
import { FullUserInfo, User } from '../slices/types';
import { UserInfoView } from '../common/enums';
import { UserValues } from '../components/user-page/info-section/useInfoSection';

const USER_API = 'user';

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post(`auth`, { username, password });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const getUserInfo = async (view: UserInfoView = UserInfoView.min): Promise<User | FullUserInfo> => {
  try {
    const response = await api.get(`${USER_API}`, { params: { view } });
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};

export const updateUserInfo = async (data: UserValues) => {
  try {
    const response = await api.put(`${USER_API}`, data);
    return response.data;
  } catch (error) {
    console.error(`Request failed: ${error}`);
    throw error;
  }
};
