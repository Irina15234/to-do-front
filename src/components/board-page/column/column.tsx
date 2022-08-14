import { BoardColumn } from '../../../slices/types';
import './column.css';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { ModalMenu } from '../../../custom-components/modal-menu/modal-menu';
import React, { useState } from 'react';
import { isEditPage, isNewPage } from '../../../common/helpers';
import { ModalMenuItem } from '../../../custom-components/menu-item';
import { ColumnBody } from './column-body/column-body';

interface ColumnProps {
  column: BoardColumn;
}

export const Column = ({ column }: ColumnProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuList = [
    {
      icon: <Edit style={{ color: 'var(--grey-color)' }} />,
      title: 'Edit'
    },
    {
      icon: <Delete style={{ color: 'var(--red-color)' }} />,
      title: 'Delete'
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

        <ModalMenu open={open} onClose={handleClose} anchorEl={anchorEl}>
          {menuList.map((item) => (
            <ModalMenuItem title={item.title} icon={item.icon} />
          ))}
        </ModalMenu>
      </div>
      <ColumnBody column={column} />
    </div>
  );
};
