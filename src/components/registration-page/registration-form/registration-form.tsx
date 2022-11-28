import { RegistrationValues, useRegistrationForm } from './useRegistrationForm';
import { CustomInput } from '../../../custom-components/input/input';
import { capitalizeFirstLetter } from '../../../common/helpers';
import { ButtonType, CustomButton } from '../../../custom-components/button/button';
import React from 'react';

export const RegistrationForm = () => {
  const { formik, fields, onChangeMaskField } = useRegistrationForm();

  return (
    <form>
      {fields.map((field) => (
        <CustomInput
          key={field.name}
          name={field.name}
          type={field.type}
          value={formik.values[field.name as keyof RegistrationValues]}
          label={capitalizeFirstLetter(field.name)}
          onChange={formik.handleChange}
          colorVariant="dark"
          fullWidth
          className="form-item-with-bottom-margin"
          error={Boolean(formik.errors[field.name as keyof RegistrationValues])}
          helperText={formik.errors[field.name as keyof RegistrationValues]}
          required
          InputProps={{ inputComponent: field.mask, onChange: onChangeMaskField }}
        />
      ))}

      <CustomButton buttonType={ButtonType.standard} onClick={() => formik.handleSubmit()}>
        Save
      </CustomButton>
    </form>
  );
};
