import { ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';
import { Link, To } from 'react-router-dom';

interface ModalMenuItemProps {
  icon: JSX.Element | null;
  title: string;
  onClick?: () => void;
  href?: To;
}

export const ModalMenuItem = ({ icon, title, onClick, href }: ModalMenuItemProps) => {
  if (href) {
    return (
      <Link to={href}>
        <MenuItem onClick={onClick}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          {title}
        </MenuItem>
      </Link>
    );
  }

  return (
    <MenuItem onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {title}
    </MenuItem>
  );
};
