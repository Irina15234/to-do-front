import { ButtonType, CustomButton } from '../../../../custom-components/button/button';
import { CustomDialog } from '../../../../custom-components/dialog/dialog';
import { useParametersDialog } from './useParametersDialog';
import { ParametersDialogBody } from './parameters-dialog-body';

export const ParametersDialog = () => {
  const { isOpenDialog, toggleOpenDialog, actions, formik } = useParametersDialog();

  return (
    <>
      <CustomButton buttonType={ButtonType.text} fullWidth={false} onClick={toggleOpenDialog}>
        Change auth parameters
      </CustomButton>

      <CustomDialog
        title="Update auth parameters"
        onClose={toggleOpenDialog}
        actions={actions}
        open={isOpenDialog}
        maxWidth="sm"
        fullWidth
      >
        <ParametersDialogBody values={formik.values} errors={formik.errors} onChangeValue={formik.handleChange} />
      </CustomDialog>
    </>
  );
};
