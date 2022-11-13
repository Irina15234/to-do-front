import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ButtonType } from '../../../../custom-components/button/button';
import { updateUserAuthParameters } from '../../../../services/user';
import { setSnackbarAction } from '../../../../slices/common/common-slice';
import { useFormik } from 'formik';

export interface ParametersValues {
  oldUsername: string;
  oldPassword: string;
  newUsername: string;
  newPassword: string;
}

export const useParametersDialog = () => {
  const dispatch = useDispatch();

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const saveParameters = () => {
    updateUserAuthParameters(formik.values)
      .then(() => {
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
            message: error.response.data,
            variant: 'error',
            open: true
          })
        );
      });
  };

  const toggleOpenDialog = () => {
    setIsOpenDialog((prevState) => !prevState);
  };

  const validate = (values: ParametersValues) => {
    const errors: { [key: string]: string } = {};

    if (!values.oldUsername?.length) {
      errors.oldUsername = 'Required';
    }
    if (!values.oldPassword?.length) {
      errors.oldPassword = 'Required';
    }

    return errors;
  };

  const initialValues: ParametersValues = {
    oldUsername: '',
    oldPassword: '',
    newUsername: '',
    newPassword: ''
  };

  const formik = useFormik({
    onSubmit: saveParameters,
    initialValues,
    validate,
    validateOnChange: false
  });

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: formik.handleSubmit
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: toggleOpenDialog
    }
  ];

  return {
    isOpenDialog,
    toggleOpenDialog,
    actions,
    formik
  };
};
