import { TextFieldProps } from '@mui/material/TextField/TextField';
import { styled, TextField } from '@mui/material';

const StyledInput = styled(TextField)({
  height: '40px',

  '& > .MuiInputLabel-root': {
    color: 'var(--light-text-color) !important',
    top: '-5px',

    '&.Mui-focused': {
      top: 0
    }
  },
  '&.input-with-start-icon > .MuiInputLabel-root': {
    top: 0
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

export const CustomInput = ({ ...props }: TextFieldProps) => {
  return <StyledInput variant="outlined" autoComplete="off" {...props} />;
};
