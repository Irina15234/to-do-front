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
  iconvariant?: IconVariant;
}

interface StyledSquareProps {
  iconvariant: IconVariant;
}

const Square = styled(IconButton)(({ iconvariant }: StyledSquareProps) => ({
  borderRadius: '8px !important',
  backgroundColor:
    iconvariant === IconVariant.primary ? 'rgba(255, 255, 255, 0.1) !important' : 'rgba(172, 126, 98, 0.1); !important',

  '& svg': {
    color: iconvariant === IconVariant.primary ? 'var(--light-icon-color)' : 'var(--dark-icon-color)'
  },

  '&:hover': {
    backgroundColor:
      iconvariant === IconVariant.primary
        ? 'rgba(255, 255, 255, 0.25) !important'
        : 'rgba(172, 126, 98, 0.25); !important'
  }
}));

const Icon = styled(IconButton)({
  padding: '0 !important',

  '&:hover': {
    backgroundColor: 'none !important'
  }
});

export const CustomIconButton = ({
  variant = IconButtonVariant.square,
  iconvariant = IconVariant.primary,
  ...props
}: StyledIconButtonProps) => {
  switch (variant) {
    case IconButtonVariant.square:
      return (
        <Square iconvariant={iconvariant} {...props}>
          {props.children}
        </Square>
      );
    case IconButtonVariant.icon:
      return <Icon {...props}>{props.children}</Icon>;
  }
};
