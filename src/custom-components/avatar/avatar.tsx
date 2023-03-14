import { Avatar, AvatarProps, styled } from '@mui/material';

interface CustomAvatar extends AvatarProps {
  type: 'img' | 'text';
  size: 'small' | 'medium' | 'large';
}

interface StyledAvatarProps {
  size: number;
}

const avatarSizes = [
  {
    type: 'small',
    size: 24
  },
  {
    type: 'medium',
    size: 30
  },
  {
    type: 'large',
    size: 40
  }
];

const StyledAvatar = styled(Avatar)(({ size }: StyledAvatarProps) => ({
  width: size,
  height: size
}));

export const CustomAvatar = ({ type, size, ...props }: CustomAvatar) => {
  const avatarSize = avatarSizes.find((item) => item.type === size)?.size || 0;

  switch (type) {
    case 'img':
      return <StyledAvatar size={avatarSize} {...props} />;
    case 'text':
      return (
        <StyledAvatar size={avatarSize} {...props}>
          {props.children}
        </StyledAvatar>
      );
  }
};
