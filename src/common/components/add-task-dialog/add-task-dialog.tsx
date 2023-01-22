import { CustomInput } from '../../../custom-components/input/input';
import clsx from 'clsx';
import { CustomSelect, CustomSelectOption } from '../../../custom-components/select/select';
import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { useAddTaskDialog } from './useAddTaskDialog';

export const AddTaskDialog = () => {
  const { handleClose, actions, fields, formik } = useAddTaskDialog();

  return (
    <CustomDialog onClose={handleClose} actions={actions} open={true} title="New task" maxWidth="sm">
      <form>
        {fields.map((field) => {
          switch (field.type) {
            case 'input':
              return (
                <CustomInput
                  name={field.name}
                  value={field.value}
                  label={field.label}
                  onChange={formik.handleChange}
                  colorVariant="dark"
                  fullWidth
                  className={clsx('item-with-bottom-margin')}
                  error={field.error}
                  helperText={field.helperText}
                  required
                  disabled={field.disabled}
                />
              );
            case 'select':
              return (
                <CustomSelect
                  labelId={field.labelId}
                  name={field.name}
                  value={field.value}
                  label={field.label}
                  onChange={formik.handleChange}
                  colorVariant="dark"
                  fullWidth
                  className={clsx('item-with-bottom-margin')}
                  error={field.error}
                  options={field.options as CustomSelectOption[]}
                  required
                  disabled={field.disabled}
                />
              );
          }
        })}
      </form>
    </CustomDialog>
  );
};
