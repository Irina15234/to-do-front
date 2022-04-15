import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomButton, CustomButtonProps } from './button';

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
  buttonType: 'standard'
};

export const Delete = Template.bind({});

Delete.args = {
  children: 'button',
  buttonType: 'delete'
};

export const Neutral = Template.bind({});

Neutral.args = {
  children: 'button',
  buttonType: 'neutral'
};

export const Add = Template.bind({});

Add.args = {
  children: 'add',
  buttonType: 'add'
};
