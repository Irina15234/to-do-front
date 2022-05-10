import { Button, ButtonProps, styled } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

export enum ButtonType {
  'standard',
  'delete',
  'neutral',
  'add'
}

export interface CustomButtonProps extends ButtonProps {
  buttonType: ButtonType;
  startIconColor?: string;
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

const AddButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: 'var(--neutral-background-color, #ffffff)',
  color: 'var(--dark-text-color, #444444)',
  border: '1px solid var(--light-border-color, #d2c8bc)',
  boxShadow: 'none',
  textTransform: 'capitalize',

  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'var(--secondary-button-color, #ba9a88)'
  }
});

export const CustomButton = ({ ...props }: CustomButtonProps) => {
  switch (props.buttonType) {
    case ButtonType.standard:
      return (
        <StandardButton {...props} variant="contained">
          {props.children}
        </StandardButton>
      );
    case ButtonType.delete:
      return (
        <DeleteButton {...props} variant="contained">
          {props.children}
        </DeleteButton>
      );
    case ButtonType.neutral:
      return (
        <NeutralButton {...props} variant="contained">
          {props.children}
        </NeutralButton>
      );
    case ButtonType.add:
      return (
        <AddButton
          {...props}
          variant="contained"
          startIcon={
            <AddCircleOutline style={{ color: props.startIconColor || 'var(--dark-background-color, #5b828e)' }} />
          }
        >
          {props.children}
        </AddButton>
      );
  }
};
