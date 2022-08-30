import { BoardColumn } from '../../../slices/types';
import './column.css';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { AddCircleOutline, Delete, Edit, MoreVert } from '@mui/icons-material';
import { ModalMenu } from '../../../custom-components/modal-menu/modal-menu';
import React, { useState } from 'react';
import { isEditPage, isNewPage } from '../../../common/helpers';
import { ModalMenuItem } from '../../../custom-components/menu-item';
import { ColumnBody } from './column-body/column-body';
import { AddTaskModal } from '../add-task-modal/add-task-modal';

interface ColumnProps {
  column: BoardColumn;
  columnsAction: { handleEditColumnTitle: (columnId: number) => void; handleDeleteColumn: (columnId: number) => void };
}

export const Column = ({ column, columnsAction }: ColumnProps) => {
  const [openTaskModal, setOpenTaskModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClickAddTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpenTaskModal(true);
  };

  const handleCloseAddTask = () => {
    setOpenTaskModal(false);
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
      icon: <Delete style={{ color: 'var(--red-color)' }} />,
      title: 'Delete',
      onClick: handleClickDelete
    }
  ];

  return (
    <div className="column">
      <div className="column__title-container">
        <div className="column__title">{column.name}</div>
        {(isEditPage() || isNewPage()) && (
          <CustomIconButton size="small" variant={IconButtonVariant.icon} onClick={handleClickSettings}>
            <MoreVert fontSize="small" style={{ color: 'var(--light-icon-color)' }} />
          </CustomIconButton>
        )}
        {!isEditPage() && !isNewPage() && !column.id && (
          <CustomIconButton size="small" variant={IconButtonVariant.icon} onClick={handleClickAddTask}>
            <AddCircleOutline fontSize="small" style={{ color: 'var(--light-icon-color)' }} />
          </CustomIconButton>
        )}

        <ModalMenu open={open} onClose={handleCloseSettings} anchorEl={anchorEl}>
          {menuList.map((item) => (
            <ModalMenuItem key={item.title} title={item.title} icon={item.icon} onClick={item.onClick} />
          ))}
        </ModalMenu>
      </div>
      <ColumnBody column={column} />

      {openTaskModal && <AddTaskModal handleClose={handleCloseAddTask} />}
    </div>
  );
};
