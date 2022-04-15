import { Button, ButtonProps, styled } from '@mui/material';

export interface CustomButtonProps extends ButtonProps {
  buttonType: 'standard' | 'delete' | 'neutral';
}

const StandardButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: 'var(--button-color, #ac7e62)',
  color: 'var(--light-text-color, #ffffff)',
  boxShadow: 'none',
  textTransform: 'capitalize',

  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'var(--secondary-button-color, #ba9a88)'
  }
});

const DeleteButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: 'var(--red-color, #c7444a)',
  color: 'var(--light-text-color, #ffffff)',
  boxShadow: 'none',
  textTransform: 'capitalize',

  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'var(--red-color, #c7444a)',
    opacity: 0.8
  }
});

const NeutralButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: 'var(--neutral-background-color, #ffffff)',
  color: 'var(--dark-text-color, #444444)',
  border: '1px solid var(--light-border-color, #d2c8bc)',
  boxShadow: 'none',
  textTransform: 'capitalize',

  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'var(--neutral-background-color, #ffffff)'
  }
});

export const CustomButton = ({ ...props }: CustomButtonProps) => {
  switch (props.buttonType) {
    case 'standard':
      return (
        <StandardButton {...props} variant="contained">
          {props.children}
        </StandardButton>
      );
    case 'delete':
      return (
        <DeleteButton {...props} variant="contained">
          {props.children}
        </DeleteButton>
      );
    case 'neutral':
      return (
        <NeutralButton {...props} variant="contained">
          {props.children}
        </NeutralButton>
      );
  }
};
