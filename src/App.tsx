import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Layout } from './components/layout/layout';
import { BoardPage } from './pages/board-page/board-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { loggedIn, logout } from './common/auth';

export const App = () => {
  useEffect(() => {
    if (!loggedIn() && location.pathname !== '/login') {
      logout();
      location.pathname = '/login';
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/board/new" element={<BoardPage />} />
          <Route path="/board/:id" element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
