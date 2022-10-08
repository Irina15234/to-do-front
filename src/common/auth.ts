import decode from 'jwt-decode';

export const loggedIn = () => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

export const isTokenExpired = (token: string) => {
  try {
    const decoded = decode(token);
    // @ts-ignore
    return decoded.exp < Date.now() / 1000;
  } catch (err) {
    return false;
  }
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
  location.pathname = '/login';
};
