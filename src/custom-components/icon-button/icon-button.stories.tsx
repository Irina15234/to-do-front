import { CustomIconButton } from './icon-button';
import { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { Apps } from '@material-ui/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: CustomIconButton,
  title: 'CustomIconButton'
} as ComponentMeta<typeof CustomIconButton>;

const Template: ComponentStory<typeof CustomIconButton> = (args: IconButtonProps) => <CustomIconButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Apps />
};
