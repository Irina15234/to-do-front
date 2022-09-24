import { useDetails } from './useDetails';
import { CustomSelect } from '../../../../../custom-components/select/select';

export const Details = () => {
  const { formik, priorityListOptions, handleChangeValue } = useDetails();

  return (
    <div className="section-block">
      <CustomSelect
        labelId="task-priority"
        label="Priority"
        name="priorityId"
        options={priorityListOptions}
        onChange={handleChangeValue}
        value={formik.values.priorityId}
        colorVariant="dark"
        fullWidth
      />
    </div>
  );
};
