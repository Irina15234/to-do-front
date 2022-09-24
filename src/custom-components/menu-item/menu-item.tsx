import { ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';

interface ModalMenuItemProps {
  icon: JSX.Element | null;
  title: string;
  onClick?: () => void;
}

export const ModalMenuItem = ({ icon, title, onClick }: ModalMenuItemProps) => {
  return (
    <MenuItem onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {title}
    </MenuItem>
  );
};
