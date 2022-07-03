import { BoardColumn } from '../../../slices/types';
import './column.css';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { ModalMenu } from '../../../custom-components/modal-menu/modal-menu';
import { ListItemIcon, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { isEditPage, isNewPage } from '../../../common/helpers';

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
          <MenuItem>
            <ListItemIcon>
              <Edit style={{ color: 'var(--grey-color)' }} />
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Delete style={{ color: 'var(--red-color)' }} />
            </ListItemIcon>
            Delete
          </MenuItem>
        </ModalMenu>
      </div>
      <div className="column__main"></div>
    </div>
  );
};
