import { useDates } from './useDates';
import { CustomInput } from '../../../../../custom-components/input/input';
import { formatDate } from '../../../../../common/helpers';

export const Dates = () => {
  const { formik } = useDates();

  return (
    <div className="section-block">
      <CustomInput
        name="date"
        value={formatDate(formik.values.date)}
        label="Date"
        onChange={formik.handleChange}
        colorVariant="dark"
        fullWidth
        disabled
      />
    </div>
  );
};
