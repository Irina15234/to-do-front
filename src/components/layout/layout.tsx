import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import './layout.css';
import { CustomSnackbar } from '../../custom-components/snackbar/snackbar';
import { DeleteDialog } from '../../common/components/delete-dialog/delete-dialog';
import { DeleteInfo, State } from '../../slices/types';
import { SidePanel } from '../side-panel/side-panel';
import { AddTaskDialog } from '../../common/components/add-task-dialog/add-task-dialog';
import { useSelector } from 'react-redux';

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

  const isOpenAddTaskModal = useSelector((state: State) => state.common.isOpenAddTaskModal);

  return (
    <Context.Provider value={{ setDeleteInfo }}>
      <Header />
      <main className="main-container">{<Outlet />}</main>
      <CustomSnackbar />
      <DeleteDialog deleteInfo={deleteInfo} setDeleteInfo={setDeleteInfo} />
      {isOpenAddTaskModal && <AddTaskDialog />}
      <SidePanel />
    </Context.Provider>
  );
};
