import { TextFieldProps } from '@mui/material/TextField/TextField';
import { styled, TextField } from '@mui/material';

export type CustomInputProps = {
  colorVariant: 'light' | 'dark';
};

const LightInput = styled(TextField)({
  height: '40px',

  '& > .MuiInputLabel-root': {
    color: 'var(--light-text-color) !important',

    '&.Mui-focused': {
      top: 0
    }
  },
  '& > .MuiOutlinedInput-root': {
    height: '40px',
    color: 'var(--light-text-color) !important',
    paddingLeft: '7px',

    '& > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--light-border-color) !important',
      color: 'var(--light-text-color) !important'
    }
  }
});

const DarkInput = styled(TextField)({
  height: '40px',

  '& > .MuiInputLabel-root': {
    color: 'var(--dark-text-color) !important',

    '&.Mui-focused': {
      top: 0
    }
  },
  '& > .MuiOutlinedInput-root': {
    height: '40px',
    color: 'var(--dark-text-color) !important',
    paddingLeft: '7px',

    '& > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--dark-border-color) !important',
      color: 'var(--dark-text-color) !important'
    }
  }
});

export const CustomInput = ({ colorVariant, ...props }: TextFieldProps & CustomInputProps) => {
  switch (colorVariant) {
    case 'light':
      return <LightInput variant="outlined" autoComplete="off" InputLabelProps={{ shrink: true }} {...props} />;
    case 'dark':
      return <DarkInput variant="outlined" autoComplete="off" InputLabelProps={{ shrink: true }} {...props} />;
    default:
      return <DarkInput variant="outlined" autoComplete="off" InputLabelProps={{ shrink: true }} {...props} />;
  }
};
