import { Link } from 'react-router-dom';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import { ListItemIcon, MenuItem } from '@mui/material';
import { ModalMenu } from '../../../custom-components/modal-menu/modal-menu';
import { Board, Task } from '../../../slices/types';

export enum CardType {
  board = 'board',
  task = 'task'
}

interface CardListItemProps {
  source: Board | Task;
  type: CardType;
}

export const CardListItem = ({ source, type }: CardListItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Link to={`${type}/${source.id}`}>
      <div className="card-list-item">
        <div className="card-list-item__name">{source.name}</div>
        <CustomIconButton variant={IconButtonVariant.icon} onClick={handleClickSettings}>
          <MoreVert style={{ color: 'var(--button-color)' }} />
        </CustomIconButton>

        <ModalMenu open={open} onClose={handleClose} anchorEl={anchorEl}>
          {type === CardType.board && (
            <>
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
            </>
          )}
        </ModalMenu>
      </div>
    </Link>
  );
};
