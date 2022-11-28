import { useFormik } from 'formik';
import { createUserInfo } from '../../../services/user';
import { setSnackbarAction } from '../../../slices/common/common-slice';
import { useDispatch } from 'react-redux';
import React, { ElementType, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { PhoneMaskInput } from '../../../common/components/mask-inputs/phone-mask-input';
import { InputBaseComponentProps } from '@mui/material';
import { emailRegExp } from '../../../common/consts';

export interface RegistrationValues {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
}

const fields = [
  {
    name: 'name',
    type: 'text'
  },
  {
    name: 'email',
    type: 'email'
  },
  {
    name: 'phone',
    type: 'text',
    mask: PhoneMaskInput as ElementType<InputBaseComponentProps>
  },
  {
    name: 'username',
    type: 'text'
  },
  {
    name: 'password',
    type: 'password'
  }
];

export const useRegistrationForm = () => {
  const dispatch = useDispatch();
  const { setInfoDialog } = useContext(GlobalContext);

  const validate = (values: RegistrationValues) => {
    const errors: { [key: string]: string } = {};

    fields.forEach((field) => {
      if (!values[field.name as keyof RegistrationValues]?.length) {
        errors[field.name] = 'Required';
      }
    });

    if (!errors['phone'] && values['phone'].includes('_')) {
      errors['phone'] = 'Incorrect phone';
    }

    if (!errors['email']) {
      const isCorrectEmail = String(values['email']).toLowerCase().match(emailRegExp);
      !isCorrectEmail && (errors['email'] = 'Incorrect email');
    }

    return errors;
  };

  const saveUser = () => {
    createUserInfo(formik.values)
      .then(() => {
        const infoDialog = {
          title: 'Registration success',
          body: 'Log in to the system',
          onClick: () => (location.pathname = '/auth')
        };
        setInfoDialog(infoDialog);
      })
      .catch((error) => {
        dispatch(
          setSnackbarAction({
            message: error.response.data,
            variant: 'error',
            open: true
          })
        );
      });
  };

  const initialValues: RegistrationValues = {
    name: '',
    email: '',
    phone: '',
    username: '',
    password: ''
  };

  const formik = useFormik({
    onSubmit: saveUser,
    initialValues,
    validate,
    validateOnChange: false
  });

  const onChangeMaskField = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    formik.handleChange(event);
  };
  return {
    formik,
    fields,
    onChangeMaskField
  };
};
