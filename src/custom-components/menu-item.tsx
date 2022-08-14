import { ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';

interface ModalMenuItemProps {
  icon: JSX.Element | null;
  title: string;
}

export const ModalMenuItem = ({ icon, title }: ModalMenuItemProps) => {
  return (
    <MenuItem>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {title}
    </MenuItem>
  );
};
