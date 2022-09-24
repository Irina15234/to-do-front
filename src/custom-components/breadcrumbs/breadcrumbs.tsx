import { Breadcrumbs, BreadcrumbsProps, styled } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';

const StyledBreadcrumbs = styled(Breadcrumbs)({
  '& .MuiTypography-root': {
    fontSize: '18px',
    fontWeight: 500,
    color: 'var(--dark-text-color)'
  },

  '& a': {
    fontSize: '14px',
    fontWeight: 400,
    color: 'var(--dark-text-color)'
  },

  '& .MuiBreadcrumbs-separator': {
    margin: 0
  }
});

export const CustomBreadcrumbs = ({ ...props }: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbs {...props} separator={<KeyboardArrowRight fontSize="medium" />} aria-label="breadcrumb">
      {props.children}
    </StyledBreadcrumbs>
  );
};
