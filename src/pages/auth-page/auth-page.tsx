import './auth-page.css';
import { CustomInput } from '../../custom-components/input/input';
import { InputAdornment } from '@mui/material';
import { AccountCircle, Key } from '@mui/icons-material';
import { ButtonType, CustomButton } from '../../custom-components/button/button';
import { login } from '../../services/user';
import { ChangeEvent, useState } from 'react';
import { setToken } from '../../common/auth';

export const AuthPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeField = (
    fieldName: 'username' | 'password',
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    fieldName === 'username' ? setUsername(event.target.value) : setPassword(event.target.value);
  };

  const handleSignInClick = () => {
    login(username, password).then((res) => {
      setToken(res.token);
      location.pathname = '/';
    });
  };

  return (
    <div className="auth-page">
      <form>
        <div className="auth-page__title">Sign In</div>
        <CustomInput
          value={username}
          label="Username"
          onChange={(event) => handleChangeField('username', event)}
          colorVariant="light"
          className="item-with-bottom-margin input-with-start-icon"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle style={{ color: 'var(--light-icon-color)' }} />
              </InputAdornment>
            )
          }}
        />
        <CustomInput
          value={password}
          label="Password"
          onChange={(event) => handleChangeField('password', event)}
          colorVariant="light"
          className="item-with-bottom-margin input-with-start-icon"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Key style={{ color: 'var(--light-icon-color)' }} />
              </InputAdornment>
            )
          }}
        />
        <div className="auth-page__buttons">
          <CustomButton buttonType={ButtonType.standard} onClick={handleSignInClick}>
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
