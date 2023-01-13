import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { CustomInput } from '../../../custom-components/input/input';
import { CustomSelect } from '../../../custom-components/select/select';
import { useAddTaskModal } from './useAddTaskModal';
import clsx from 'clsx';

export interface AddTaskModalProps {
  handleClose: () => void;
}

export const AddTaskModal = ({ handleClose }: AddTaskModalProps) => {
  const { formik, actions, priorityListOptions, executorsListOptions } = useAddTaskModal({ handleClose });

  return (
    <CustomDialog onClose={handleClose} actions={actions} open={true} title="New task" maxWidth="sm">
      <form>
        <CustomInput
          name="name"
          value={formik.values.name}
          label="Name"
          onChange={formik.handleChange}
          colorVariant="dark"
          fullWidth
          className={clsx('item-with-bottom-margin')}
          error={Boolean(formik.errors.name)}
          helperText={formik.errors.name}
          required
        />
        <CustomSelect
          labelId="add-task-priority"
          label="Priority"
          name="priorityId"
          options={priorityListOptions}
          onChange={formik.handleChange}
          value={formik.values.priorityId}
          colorVariant="dark"
          fullWidth
          className={clsx('item-with-bottom-margin', {
            'error-input-margin': !!formik.errors.priorityId
          })}
          required
        />
        <CustomInput
          name="author"
          value={formik.values.author}
          label="Author"
          onChange={formik.handleChange}
          colorVariant="dark"
          fullWidth
          className={clsx('item-with-bottom-margin', {
            'error-input-margin': !!formik.errors.author
          })}
          disabled
          required
        />
        <CustomSelect
          labelId="add-task-executor"
          label="Executor"
          name="executorId"
          options={executorsListOptions}
          onChange={formik.handleChange}
          value={formik.values.executorId}
          colorVariant="dark"
          fullWidth
          className={clsx({
            'error-input-margin': !!formik.errors.executorId
          })}
          required
        />
      </form>
    </CustomDialog>
  );
};
