import { FormControlLabel, FormControlLabelProps, styled } from '@mui/material';

const StyledFormControlLabel = styled(FormControlLabel)((props: { withlabel: number }) => ({
  marginLeft: 0,
  marginRight: props.withlabel ? 10 : 0
}));

export const CustomFormControlLabel = (props: FormControlLabelProps) => {
  return <StyledFormControlLabel {...props} withlabel={(props.label as string)?.length > 0 ? 1 : 0} />;
};
