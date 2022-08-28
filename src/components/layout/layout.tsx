import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import './layout.css';
import { CustomSnackbar } from '../../custom-components/snackbar/snackbar';
import { DeleteDialog } from '../../common/components/delete-dialog/delete-dialog';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-container">{<Outlet />}</main>
      <CustomSnackbar />
      <DeleteDialog />
    </>
  );
};
