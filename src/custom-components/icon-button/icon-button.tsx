import { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { IconButton, styled } from '@mui/material';

export enum IconButtonVariant {
  icon = 'icon',
  square = 'square'
}

export interface StyledIconButtonProps extends IconButtonProps {
  variant?: IconButtonVariant;
}

const Square = styled(IconButton)({
  borderRadius: '4px !important',
  backgroundColor: 'rgba(255, 255, 255, 0.1) !important',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25) !important'
  }
});

const Icon = styled(IconButton)({
  padding: '5px !important',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05) !important'
  }
});

export const CustomIconButton = ({ variant = IconButtonVariant.square, ...props }: StyledIconButtonProps) => {
  switch (variant) {
    case IconButtonVariant.square:
      return <Square {...props}>{props.children}</Square>;
    case IconButtonVariant.icon:
      return <Icon {...props}>{props.children}</Icon>;
  }
};
