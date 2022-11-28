import { IMaskInput } from 'react-imask';
import React from 'react';

export const PhoneMaskInput = React.forwardRef((props, ref) => {
  const onChange = (props as any).onChange;

  return (
    <IMaskInput
      {...props}
      inputRef={ref as any}
      mask={'+{7}(000)000-00-00'}
      lazy={false}
      placeholderChar="_"
      onAccept={(value, maskRef, event) => onChange(event)}
    />
  );
});
