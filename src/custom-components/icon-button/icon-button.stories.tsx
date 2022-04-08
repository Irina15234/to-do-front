import { CustomIconButton, IconButtonVariant, StyledIconButtonProps } from './icon-button';
import { Apps, Edit } from '@material-ui/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: CustomIconButton,
  title: 'CustomIconButton'
} as ComponentMeta<typeof CustomIconButton>;

const Template: ComponentStory<typeof CustomIconButton> = (args: StyledIconButtonProps) => (
  <CustomIconButton {...args} />
);

export const Square = Template.bind({});

Square.args = {
  children: <Apps />
};

export const ColorSquare = Template.bind({});

ColorSquare.args = {
  children: <Apps style={{ color: '#123456' }} />
};

export const Icon = Template.bind({});

Icon.args = {
  variant: IconButtonVariant.icon,
  children: <Edit />
};
