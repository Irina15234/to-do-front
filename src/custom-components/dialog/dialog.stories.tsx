import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomDialog, CustomDialogProps } from './dialog';
import React from 'react';
import { ButtonType } from '../button/button';

export default {
  component: CustomDialog,
  title: 'CustomDialog'
} as ComponentMeta<typeof CustomDialog>;

const Template: ComponentStory<typeof CustomDialog> = (args: CustomDialogProps) => (
  <CustomDialog {...args}>{args.children}</CustomDialog>
);

export const StandardDialog = Template.bind({});

const actions = [
  {
    buttonType: ButtonType.standard,
    title: 'Save',
    onClick: () => null
  },
  {
    buttonType: ButtonType.neutral,
    title: 'Cancel',
    onClick: () => null
  }
];

StandardDialog.args = {
  children: <div>dialog body</div>,
  open: true,
  title: 'Title',
  onClose: () => null,
  actions
};
