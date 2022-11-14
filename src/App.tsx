import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Layout } from './components/layout/layout';
import { BoardPage } from './pages/board-page/board-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { isLoginPage, loggedIn, logout } from './common/auth';
import { TaskPage } from './pages/task-page/task-page';
import { UserPage } from './pages/user-page/user-page';
import { RegistrationPage } from './pages/registration-page/registration-page';
import { InfoDialog } from './common/components/info-dialog/info-dialog';
import { InfoDialogObject } from './slices/types';

const defaultValue: { setInfoDialog: React.Dispatch<React.SetStateAction<InfoDialogObject>> } = {
  setInfoDialog: () => undefined
};

export const GlobalContext = createContext(defaultValue);

export const App = () => {
  useEffect(() => {
    if (!loggedIn() && !isLoginPage()) {
      logout();
    }
  }, []);

  const [infoDialog, setInfoDialog] = useState<InfoDialogObject>({
    title: '',
    body: '',
    onClick: () => undefined
  });

  return (
    <GlobalContext.Provider value={{ setInfoDialog }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/board/new" element={<BoardPage />} />
            <Route path="/board/:id" element={<BoardPage />} />
            <Route path="/board/:id/edit" element={<BoardPage />} />
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <InfoDialog infoDialog={infoDialog} setInfoDialog={setInfoDialog} />
    </GlobalContext.Provider>
  );
};
