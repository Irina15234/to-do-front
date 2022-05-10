import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonType, CustomButton, CustomButtonProps } from './button';

export default {
  component: CustomButton,
  title: 'CustomButton'
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args: CustomButtonProps) => (
  <CustomButton {...args}>{args.children}</CustomButton>
);

export const Standard = Template.bind({});

Standard.args = {
  children: 'button',
  buttonType: ButtonType.standard
};

export const Delete = Template.bind({});

Delete.args = {
  children: 'button',
  buttonType: ButtonType.delete
};

export const Neutral = Template.bind({});

Neutral.args = {
  children: 'button',
  buttonType: ButtonType.neutral
};

export const Add = Template.bind({});

Add.args = {
  children: 'add',
  buttonType: ButtonType.add
};
