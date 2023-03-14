import { Checkbox, CheckboxProps, styled } from '@mui/material';
import { CustomFormControlLabel } from '../form-control-label/form-control-label';

interface CustomCheckbox extends CheckboxProps {
  label?: string;
}

const StyledCheckbox = styled(Checkbox)({
  padding: 0,

  '& .MuiSvgIcon-root': {
    fill: 'var(--button-color-2)'
  }
});

export const CustomCheckbox = ({ label = '', ...props }: CustomCheckbox) => {
  return <CustomFormControlLabel control={<StyledCheckbox {...props} />} label={label} />;
};
