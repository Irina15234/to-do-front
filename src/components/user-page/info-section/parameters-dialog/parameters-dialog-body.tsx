import { ParametersValues } from './useParametersDialog';
import { CustomInput } from '../../../../custom-components/input/input';
import { FormikErrors } from 'formik/dist/types';
import { ChangeEvent } from 'react';
import clsx from 'clsx';

interface ParametersDialogBodyProps {
  values: ParametersValues;
  onChangeValue: (e: ChangeEvent) => void;
  errors: FormikErrors<ParametersValues>;
}

export const ParametersDialogBody = ({ values, onChangeValue, errors }: ParametersDialogBodyProps) => {
  return (
    <form>
      {Object.keys(values).map((valueKey, index) => (
        <CustomInput
          key={valueKey}
          name={valueKey}
          value={values[valueKey as keyof ParametersValues]}
          label={valueKey}
          onChange={onChangeValue}
          error={!!errors[valueKey as keyof ParametersValues]}
          helperText={errors[valueKey as keyof ParametersValues]}
          colorVariant="dark"
          fullWidth
          required={valueKey.includes('old')}
          className={clsx({
            'error-input-margin': !!errors[valueKey as keyof ParametersValues],
            'item-with-bottom-margin': index !== Object.keys(values).length - 1
          })}
        />
      ))}
    </form>
  );
};
