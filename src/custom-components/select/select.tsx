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

export type CustomSelectProps = {
  options: { id: number | string; value: string | number; icon?: string }[];
  colorVariant: 'light' | 'dark';
};

const StyledLabel = styled(InputLabel)((styledProps: { colorvariant: 'light' | 'dark' }) => ({
  top: '0 !important',
  color:
    styledProps.colorvariant === 'light' ? 'var(--light-text-color) !important' : 'var(--dark-text-color) !important'
}));

const StyledSelect = styled(Select)((styledProps: { colorvariant: 'light' | 'dark' }) => ({
  height: '40px',

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
      styledProps.colorvariant === 'light' ? 'var(--light-text-color) !important' : 'var(--dark-text-color) !important'
  },

  '& > .MuiOutlinedInput-notchedOutline': {
    borderColor:
      styledProps.colorvariant === 'light'
        ? 'var(--light-border-color) !important'
        : 'var(--dark-border-color) !important'
  },

  '& .MuiSvgIcon-root': {
    color: 'var(--grey-color)'
  }
}));

export const CustomSelect = ({ options, colorVariant, ...props }: SelectProps & CustomSelectProps) => {
  return (
    <FormControl fullWidth={props.fullWidth}>
      {props.label && (
        <StyledLabel id={props.labelId} colorvariant={colorVariant}>
          {props.label}
        </StyledLabel>
      )}
      <StyledSelect {...props} colorvariant={colorVariant}>
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
