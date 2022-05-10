import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Layout } from './components/layout/layout';
import { BoardPage } from './pages/board-page/board-page';
import { AuthPage } from './pages/auth-page/auth-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {!localStorage.token && <Route path="/" element={<AuthPage />} />}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/board/new" element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
