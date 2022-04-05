import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import './layout.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-container">{<Outlet />}</main>
    </>
  );
};
