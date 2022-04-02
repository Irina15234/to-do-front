import { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { IconButton } from '@mui/material';
import { withStyles } from '@material-ui/core';

const StylesIconButton = withStyles(() => ({
  root: {
    borderRadius: '4px !important',
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',

    '& > .MuiSvgIcon-root': {
      fill: 'var(--light-icon-color)',
    }
  },
}))(IconButton);

export const CustomIconButton = ({ ...props }: IconButtonProps) => {
  return (
    <StylesIconButton {...props}>
      {props.children}
    </StylesIconButton>
  );
};
