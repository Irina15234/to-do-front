import { IconButtonProps } from "@mui/material/IconButton/IconButton";
import { IconButton } from '@mui/material';

export const CustomIconButton = (props: IconButtonProps) => {

  return (
    <IconButton>
      {props.children}
    </IconButton>
  );
}