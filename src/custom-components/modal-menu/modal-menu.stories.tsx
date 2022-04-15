import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ModalMenu } from './modal-menu';
import { MenuProps } from '@mui/material/Menu/Menu';
import { ListItemIcon, MenuItem } from '@mui/material';
import { Delete } from '@mui/icons-material';
import React from 'react';

export default {
  component: ModalMenu,
  title: 'ModalMenu'
} as ComponentMeta<typeof ModalMenu>;

const Template: ComponentStory<typeof ModalMenu> = (args: MenuProps) => (
  <ModalMenu {...args}>{args.children}</ModalMenu>
);

export const MenuWithIcon = Template.bind({});

MenuWithIcon.args = {
  children: (
    <MenuItem>
      <ListItemIcon>
        <Delete style={{ color: 'red' }} />
      </ListItemIcon>
      Delete
    </MenuItem>
  ),
  open: true,
  anchorReference: 'anchorPosition',
  anchorPosition: { top: 50, left: 50 }
};
