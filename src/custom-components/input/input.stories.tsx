import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomInput } from './input';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { InputAdornment } from '@mui/material';
import { Key } from '@mui/icons-material';

export default {
  component: CustomInput,
  title: 'CustomInput'
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = (args: TextFieldProps) => <CustomInput {...args} />;

export const InputWithLabel = Template.bind({});

InputWithLabel.args = {
  label: 'label'
};

export const InputWithStartIcon = Template.bind({});

InputWithStartIcon.args = {
  label: 'label',
  className: 'input-with-start-icon',
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <Key style={{ color: '#123456' }} />
      </InputAdornment>
    )
  }
};
