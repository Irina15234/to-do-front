import decode from 'jwt-decode';

export const loggedIn = () => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

export const isLoginPage = () => {
  return location.pathname === '/login' || location.pathname === '/registration';
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
  location.pathname = '/login';
  localStorage.removeItem('token');
};
