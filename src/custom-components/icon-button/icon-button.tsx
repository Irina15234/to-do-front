import { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { IconButton, styled } from '@mui/material';

export enum IconButtonVariant {
  icon = 'icon',
  square = 'square'
}

export enum IconVariant {
  primary,
  secondary,
  white
}

export interface StyledIconButtonProps extends IconButtonProps {
  variant?: IconButtonVariant;
  iconVariant?: IconVariant;
}

const Square = styled(IconButton)({
  borderRadius: '8px !important',
  backgroundColor: 'rgba(255, 255, 255, 0.1) !important',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25) !important'
  }
});

const Icon = styled(IconButton)({
  padding: '0 !important',

  '&:hover': {
    backgroundColor: 'none !important'
  }
});

export const CustomIconButton = ({
  variant = IconButtonVariant.square,
  iconVariant = IconVariant.primary,
  ...props
}: StyledIconButtonProps) => {
  switch (variant) {
    case IconButtonVariant.square:
      return <Square {...props}>{props.children}</Square>;
    case IconButtonVariant.icon:
      return <Icon {...props}>{props.children}</Icon>;
  }
};
