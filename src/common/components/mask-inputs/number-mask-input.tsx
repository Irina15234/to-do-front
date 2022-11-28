import { IMaskInput } from 'react-imask';
import React from 'react';

export const NumberMaskInput = React.forwardRef((props, ref) => {
  const onChange = (props as any).onChange;

  return (
    <IMaskInput {...props} inputRef={ref as any} mask={Number} onAccept={(value, maskRef, event) => onChange(event)} />
  );
});
