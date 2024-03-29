import {
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectProps,
  styled
} from '@mui/material';
import React from 'react';

export interface CustomSelectOption {
  id: number | string;
  value: string | number;
  icon?: string;
}

export type CustomSelectProps = {
  options: CustomSelectOption[];
  colorVariant: 'light' | 'dark';
};

const StyledLabel = styled(InputLabel)((styledProps: { colorVariant: 'light' | 'dark' }) => ({
  color:
    styledProps.colorVariant === 'light' ? 'var(--light-text-color) !important' : 'var(--dark-text-color) !important'
}));

const StyledSelect = styled(Select)((styledProps: Partial<SelectProps & CustomSelectProps>) => ({
  height: '40px',
  borderRadius: 8,
  color:
    styledProps.colorVariant === 'light' ? 'var(--light-text-color) !important' : 'var(--dark-text-color) !important',

  '& > .MuiInputLabel-root:not(.Mui-error)': {
    color: 'var(--light-text-color) !important'
  },
  '& > .MuiInputLabel-root': {
    '&.Mui-focused': {
      top: 0
    }
  },
  '& .MuiListItemIcon-root': {
    minWidth: '26px',
    alignItems: 'center'
  },

  '& .MuiSelect-select': {
    display: 'flex'
  },

  '& > .MuiSelect-nativeInput': {
    height: '40px',
    color:
      styledProps.colorVariant === 'light' ? 'var(--light-text-color) !important' : 'var(--dark-text-color) !important'
  },

  '& > .MuiOutlinedInput-notchedOutline:not(.Mui-error)': {
    borderColor:
      styledProps.colorVariant === 'light'
        ? 'var(--light-border-color) !important'
        : 'var(--dark-border-color) !important'
  },

  '& .MuiSvgIcon-root': {
    color: 'var(--grey-color)'
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0
  }
}));

export const CustomSelect = ({ options, colorVariant, ...props }: SelectProps & CustomSelectProps) => {
  return (
    <FormControl fullWidth={props.fullWidth}>
      {props.label && (
        <StyledLabel id={props.labelId} colorVariant={colorVariant} shrink>
          {props.label}
        </StyledLabel>
      )}
      <StyledSelect {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.id}>
            {option.icon && (
              <ListItemIcon>
                <img src={option.icon} width={14} height={14} alt="" />
              </ListItemIcon>
            )}
            <ListItemText primary={option.value} />
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};
