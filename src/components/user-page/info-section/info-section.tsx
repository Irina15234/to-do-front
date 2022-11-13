import './info-section.css';
import { useInfoSection, UserValues } from './useInfoSection';
import { CustomInput } from '../../../custom-components/input/input';
import { CustomButton } from '../../../custom-components/button/button';
import { ParametersDialog } from './parameters-dialog/parameters-dialog';

export const InfoSection = () => {
  const { formik, fieldsList, actions } = useInfoSection();

  return (
    <div className="info-section">
      <form>
        {fieldsList.map((field, index) => (
          <CustomInput
            key={field.name}
            name={field.name}
            value={formik.values[field.name as keyof UserValues]}
            label={field.label}
            onChange={formik.handleChange}
            error={!!formik.errors[field.name as keyof UserValues]}
            helperText={formik.errors[field.name as keyof UserValues]}
            colorVariant="dark"
            fullWidth
            className={index === fieldsList.length - 1 ? '' : 'form-item-with-bottom-margin'}
            required
          />
        ))}

        <div className="info-section__buttons">
          {actions.map((button) => (
            <CustomButton
              key={button.title}
              buttonType={button.buttonType}
              onClick={button.onClick}
              className="info-section__button"
            >
              {button.title}
            </CustomButton>
          ))}
        </div>
      </form>

      <ParametersDialog />
    </div>
  );
};
