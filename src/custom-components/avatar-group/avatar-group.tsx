import { AvatarGroup, AvatarGroupProps, styled } from '@mui/material';

const StyledAvatarGroup = styled(AvatarGroup)({
  '& .MuiAvatar-root': {
    border: 'none'
  }
});

export const CustomAvatarGroup = ({ ...props }: AvatarGroupProps) => {
  return (
    <StyledAvatarGroup max={3} spacing={10} {...props}>
      {props.children}
    </StyledAvatarGroup>
  );
};
