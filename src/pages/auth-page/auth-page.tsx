import './auth-page.css';
import { CustomInput } from '../../custom-components/input/input';
import { InputAdornment } from '@mui/material';
import { AccountCircle, Key } from '@mui/icons-material';
import { ButtonType, CustomButton } from '../../custom-components/button/button';
import { login } from '../../services/user';
import { setToken } from '../../common/auth';
import { useFormik } from 'formik';
import clsx from 'clsx';

interface AuthValues {
  username: string;
  password: string;
}

export const AuthPage = () => {
  const handleSignInClick = (values: AuthValues) => {
    login(values.username, values.password).then((res) => {
      setToken(res.token);
      location.pathname = '/';
    });
  };

  const validate = (values: AuthValues) => {
    const errors: { [key: string]: string } = {};

    if (!values.username?.length) {
      errors.username = 'Required';
    }
    if (!values.password?.length) {
      errors.password = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    onSubmit: handleSignInClick,
    initialValues: {
      username: '',
      password: ''
    },
    validate,
    validateOnChange: false
  });

  return (
    <div className="auth-page">
      <form>
        <div className="auth-page__title">Sign In</div>
        <CustomInput
          value={formik.values.username}
          label="Username"
          name="username"
          onChange={formik.handleChange}
          colorVariant="light"
          className={clsx('item-with-bottom-margin input-with-start-icon', {
            'error-input-margin': Boolean(formik.errors.username)
          })}
          error={Boolean(formik.errors.username)}
          helperText={formik.errors.username}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle style={{ color: 'var(--light-icon-color)' }} />
              </InputAdornment>
            )
          }}
        />
        <CustomInput
          value={formik.values.password}
          label="Password"
          name="password"
          onChange={formik.handleChange}
          colorVariant="light"
          className={clsx('item-with-bottom-margin input-with-start-icon', {
            'error-input-margin': Boolean(formik.errors.password)
          })}
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password}
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Key style={{ color: 'var(--light-icon-color)' }} />
              </InputAdornment>
            )
          }}
        />
        <div className="form-buttons">
          <CustomButton buttonType={ButtonType.standard} onClick={() => formik.handleSubmit()}>
            Sign In
          </CustomButton>
          <CustomButton buttonType={ButtonType.lightText} fullWidth={false} href="/registration">
            Registration
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
