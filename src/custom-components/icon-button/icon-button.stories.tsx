import { CustomIconButton } from './icon-button';
import { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { Apps } from '@material-ui/icons';

export default {
  component: CustomIconButton,
  title: 'CustomIconButton'
};

const Template = (args: IconButtonProps) => <CustomIconButton {...args} />;

export const Default = Template.bind({});

// @ts-ignore
Default.args = {
  children: <Apps />
};
