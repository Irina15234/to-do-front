import { CustomInput } from '../../../../../custom-components/input/input';
import { usePeople } from './usePeople';
import { CustomSelect } from '../../../../../custom-components/select/select';

export const People = () => {
  const { formik, executorsListOptions, handleChangeValue } = usePeople();

  return (
    <div className="section-block">
      <CustomInput
        name="author"
        value={formik.values.author}
        label="Author"
        onChange={formik.handleChange}
        colorVariant="dark"
        fullWidth
        disabled
        className="item-with-bottom-margin"
      />
      <CustomSelect
        labelId="task-executor"
        label="Executor"
        name="executorId"
        options={executorsListOptions}
        onChange={handleChangeValue}
        value={formik.values.executorId}
        colorVariant="dark"
        fullWidth
      />
    </div>
  );
};
