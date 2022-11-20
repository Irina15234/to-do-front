import { Button, ButtonProps, styled } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

export enum ButtonType {
  'standard',
  'delete',
  'neutral',
  'add',
  'text',
  'lightText'
}

export interface CustomButtonProps extends ButtonProps {
  buttonType: ButtonType;
  startIconColor?: string;
}

const StandardButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: 'var(--button-color, #ac7e62)',
  borderRadius: '8px',
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
  borderRadius: '8px',
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
  borderRadius: '8px',
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
  borderRadius: '8px',
  boxShadow: 'none',
  textTransform: 'capitalize',
  transitionDuration: '0.8s',

  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'var(--secondary-button-color, #ba9a88)'
  }
});

const TextButton = styled(Button)({
  padding: 0,
  background: 'none',
  color: 'var(--button-color, #ac7e62)',
  boxShadow: 'none',
  textTransform: 'capitalize',

  '&:hover': {
    boxShadow: 'none',
    background: 'none',
    color: 'var(--secondary-button-color, #ba9a88)'
  }
});

const LightTextButton = styled(Button)({
  padding: 0,
  background: 'none',
  color: '#ffffff',
  boxShadow: 'none',
  textTransform: 'capitalize',

  '&:hover': {
    boxShadow: 'none',
    background: 'none',
    color: 'var(--secondary-button-color, #ba9a88)'
  }
});

export const CustomButton = ({ buttonType, startIconColor, ...props }: CustomButtonProps) => {
  switch (buttonType) {
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
          startIcon={<AddCircleOutline style={{ color: startIconColor || 'var(--button-color-2, #5b828e)' }} />}
        >
          {props.children}
        </AddButton>
      );
    case ButtonType.text:
      return (
        <TextButton {...props} variant="contained">
          {props.children}
        </TextButton>
      );
    case ButtonType.lightText:
      return (
        <LightTextButton {...props} variant="contained">
          {props.children}
        </LightTextButton>
      );
  }
};
