import { IMask, IMaskInput } from 'react-imask';
import React from 'react';

export const DateMaskInput = React.forwardRef((props, ref) => {
  const onChange = (props as any).onChange;

  return (
    <IMaskInput
      {...props}
      inputRef={ref as any}
      mask={Date}
      pattern="Y-`m-`d"
      blocks={{
        d: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        },
        m: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        },
        Y: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: 2022
        }
      }}
      autofix={true}
      lazy={true}
      parse={(str) => {
        const yearMonthDay = str.split('-');
        return new Date(+yearMonthDay[0], +yearMonthDay[1] - 1, +yearMonthDay[2]);
      }}
      overwrite
      format={(date) => {
        let day: number | string = date.getDate();
        let month: number | string = date.getMonth() + 1;
        const year = date.getFullYear();

        if (day < 10) {
          day = '0' + day;
        }

        if (month < 10) {
          month = '0' + month;
        }

        return [year, month, day].join('-');
      }}
      onAccept={(value, maskRef, event) => onChange(event)}
    />
  );
});
