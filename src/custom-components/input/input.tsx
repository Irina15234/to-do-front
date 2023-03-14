import { TextFieldProps } from '@mui/material/TextField/TextField';
import { InputAdornment, styled, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

export type CustomInputProps = {
  colorVariant: 'light' | 'dark';
  search?: boolean;
};

const LightInput = styled(TextField)({
  '& > .MuiInputLabel-root:not(.Mui-error)': {
    color: 'var(--light-text-color) !important'
  },
  '& > .MuiInputLabel-root': {
    '&.Mui-focused': {
      top: 0
    }
  },
  '& > .MuiInputBase-root': {
    height: '40px',
    color: 'var(--light-text-color) !important',
    paddingLeft: '7px',
    borderRadius: 8,

    '& > .MuiOutlinedInput-notchedOutline': {
      color: 'var(--light-text-color) !important'
    }
  },
  '& > .MuiInputBase-multiline': {
    height: 'auto'
  },
  '& > .MuiInputBase-root:not(.Mui-error)': {
    '& > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--light-border-color) !important'
    }
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0
  }
});

const DarkInput = styled(TextField)({
  '& > .MuiInputLabel-root:not(.Mui-error)': {
    color: 'var(--dark-text-color) !important'
  },
  '& > .MuiInputLabel-root': {
    '&.Mui-focused': {
      top: 0
    }
  },
  '& > .MuiInputBase-root': {
    height: '40px',
    color: 'var(--dark-text-color) !important',
    paddingLeft: '7px',
    borderRadius: 8,

    '& > .MuiOutlinedInput-notchedOutline': {
      color: 'var(--dark-text-color) !important'
    }
  },
  '& > .MuiInputBase-multiline': {
    height: 'auto'
  },
  '& > .MuiInputBase-root:not(.Mui-error)': {
    '& > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--dark-border-color) !important'
    }
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0
  }
});

export const CustomInput = ({ colorVariant, search, ...props }: TextFieldProps & CustomInputProps) => {
  switch (colorVariant) {
    case 'light':
      return (
        <LightInput
          variant="outlined"
          autoComplete="off"
          InputLabelProps={{ shrink: true }}
          {...props}
          InputProps={{
            startAdornment: search ? (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ) : null,
            ...props.InputProps
          }}
        />
      );
    case 'dark':
      return (
        <DarkInput
          variant="outlined"
          autoComplete="off"
          InputLabelProps={{ shrink: true }}
          {...props}
          InputProps={{
            startAdornment: search ? (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ) : null,
            ...props.InputProps
          }}
        />
      );
    default:
      return <DarkInput variant="outlined" autoComplete="off" InputLabelProps={{ shrink: true }} {...props} />;
  }
};
