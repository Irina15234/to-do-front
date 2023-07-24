import { Menu, styled } from '@mui/material';
import React from 'react';
import { MenuProps } from '@mui/material/Menu/Menu';

const StyledMenu = styled(Menu)({
  '.MuiPaper-root': {
    boxShadow: '0px 12px 26px -3px rgba(91, 130, 142, 0.4)',
    minWidth: '150px',
    borderRadius: 8,
    border: '1px solid var(--neutral-border-color)'
  },
  '.MuiMenuItem-root': {
    fontSize: '14px',
    color: 'var(--dark-text-color, #444444)',
    padding: '6px 16px 6px 8px'
  }
});

export const ModalMenu = ({ ...props }: MenuProps) => {
  return (
    <StyledMenu
      id="basic-menu"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
      {...props}
    >
      {props.children}
    </StyledMenu>
  );
};
