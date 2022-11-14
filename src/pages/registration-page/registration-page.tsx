import './registration-page.css';
import { RegistrationForm } from '../../components/registration-page/registration-form/registration-form';

export const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="registration-page__head">Registration</div>
      <div className="registration-page__main">
        <RegistrationForm />
      </div>
    </div>
  );
};
