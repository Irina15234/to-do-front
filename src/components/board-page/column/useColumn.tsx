import { ColumnProps } from './column';
import React, { useState } from 'react';
import { DeleteOutline, Edit } from '@mui/icons-material';
import { toggleOpenAddTaskModalAction } from '../../../slices/common/common-slice';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../slices/types';

export const useColumn = ({ column, columnsAction }: ColumnProps) => {
  const dispatch = useDispatch();

  const permissions = useSelector((state: State) => state.board.permissions) || [];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClickAddTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(toggleOpenAddTaskModalAction(true));
  };

  const handleCloseSettings = () => {
    setAnchorEl(null);
  };

  const handleClickEdit = () => {
    columnsAction.handleEditColumnTitle(column.id);
    handleCloseSettings();
  };

  const handleClickDelete = () => {
    columnsAction.handleDeleteColumn(column.id);
    handleCloseSettings();
  };

  const menuList = [
    {
      icon: <Edit style={{ color: 'var(--grey-color)' }} />,
      title: 'Edit',
      onClick: handleClickEdit
    },
    {
      icon: <DeleteOutline style={{ color: 'var(--red-color)' }} />,
      title: 'Delete',
      onClick: handleClickDelete
    }
  ];

  return {
    handleClickSettings,
    handleClickAddTask,
    handleCloseSettings,
    anchorEl,
    open,
    menuList,
    permissions
  };
};
