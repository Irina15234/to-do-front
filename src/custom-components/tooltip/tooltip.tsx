import { styled, Tooltip, TooltipProps } from '@mui/material';

const StyledTooltip = styled(Tooltip)({
  fontSize: '14px'
});

export const CustomTooltip = ({ ...props }: TooltipProps) => {
  return <StyledTooltip {...props}>{props.children}</StyledTooltip>;
};
