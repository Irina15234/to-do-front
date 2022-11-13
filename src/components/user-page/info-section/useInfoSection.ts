import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { getUserInfo, updateUserInfo } from '../../../services/user';
import { UserInfoView } from '../../../common/enums';
import { setSnackbarAction } from '../../../slices/common/common-slice';
import { useDispatch } from 'react-redux';
import { ButtonType } from '../../../custom-components/button/button';
import * as React from 'react';

export interface UserValues {
  name: string;
  phone: string;
  email: string;
  username: string;
}

const fieldsList = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'phone',
    label: 'Phone'
  },
  {
    name: 'email',
    label: 'Email'
  },
  {
    name: 'username',
    label: 'Username'
  }
];

const initialValues: UserValues = {
  name: '',
  phone: '',
  email: '',
  username: ''
};

export const useInfoSection = () => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState<UserValues>(initialValues);

  const validate = (values: UserValues) => {
    const errors: { [key: string]: string } = {};

    fieldsList.forEach((field) => {
      if (!values[field.name as keyof UserValues]?.length) {
        errors[field.name] = 'Required';
      }
    });

    return errors;
  };

  const handleSave = useCallback(
    (values: UserValues) => {
      updateUserInfo(values)
        .then(() => {
          setUserInfo(values);
          dispatch(
            setSnackbarAction({
              message: 'Data saved',
              variant: 'success',
              open: true
            })
          );
        })
        .catch((error) => {
          dispatch(
            setSnackbarAction({
              message: error.response?.data || 'error',
              variant: 'error',
              open: true
            })
          );
        });
    },
    [dispatch]
  );

  const formik = useFormik({
    onSubmit: handleSave,
    initialValues,
    validate
  });

  useEffect(() => {
    getUserInfo(UserInfoView.full)
      .then((res) => {
        const values = {
          name: res.name,
          phone: 'phone' in res ? res.phone : '',
          email: 'email' in res ? res.email : '',
          username: 'username' in res ? res.username : ''
        };
        setUserInfo(values);
        formik.setValues(values);
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
  }, []);

  const revertForm = useCallback(() => {
    formik.setValues(userInfo);
  }, [formik, userInfo]);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: (event: React.MouseEvent<HTMLElement>) =>
        formik.handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>)
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Revert',
      onClick: revertForm
    }
  ];

  return {
    formik,
    fieldsList,
    actions
  };
};
