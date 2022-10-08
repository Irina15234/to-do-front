import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import './layout.css';
import { CustomSnackbar } from '../../custom-components/snackbar/snackbar';
import { DeleteDialog } from '../../common/components/delete-dialog/delete-dialog';
import { DeleteInfo } from '../../slices/types';
import { SidePanel } from '../side-panel/side-panel';

const defaultValue: { setDeleteInfo: React.Dispatch<React.SetStateAction<DeleteInfo>> } = {
  setDeleteInfo: () => undefined
};

export const Context = createContext(defaultValue);

export const Layout = () => {
  const [deleteInfo, setDeleteInfo] = useState<DeleteInfo>({
    title: '',
    body: '',
    onDelete: () => undefined
  });

  return (
    <Context.Provider value={{ setDeleteInfo }}>
      <Header />
      <main className="main-container">{<Outlet />}</main>
      <CustomSnackbar />
      <DeleteDialog deleteInfo={deleteInfo} setDeleteInfo={setDeleteInfo} />
      <SidePanel />
    </Context.Provider>
  );
};
