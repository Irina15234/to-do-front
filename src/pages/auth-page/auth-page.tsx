import './auth-page.css';
import { CustomInput } from '../../custom-components/input/input';
import { InputAdornment } from '@mui/material';
import { AccountCircle, Key } from '@mui/icons-material';
import { CustomButton } from '../../custom-components/button/button';

export const AuthPage = () => {
  return (
    <div className="auth-page">
      <form>
        <div className="auth-page__title">Sign In</div>
        <CustomInput
          label="Username"
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
          label="Password"
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
          <CustomButton buttonType="standard">Sign In</CustomButton>
        </div>
      </form>
    </div>
  );
};
