import { CustomDialog } from '../../../../custom-components/dialog/dialog';
import { ButtonType, CustomButton } from '../../../../custom-components/button/button';
import { usePhotoDialog } from './usePhotoDialog';
import { CustomDropzone } from '../../../../custom-components/dropzone/dropzone';

export const PhotoDialog = () => {
  const { isOpenDialog, toggleOpenDialog, actions, changeFile } = usePhotoDialog();

  return (
    <>
      <CustomButton buttonType={ButtonType.text} fullWidth={false} onClick={toggleOpenDialog}>
        Change photo
      </CustomButton>

      <CustomDialog
        title="Upload photo"
        onClose={toggleOpenDialog}
        actions={actions}
        open={isOpenDialog}
        maxWidth="sm"
        fullWidth
      >
        <CustomDropzone type="image" changeFile={changeFile} />
      </CustomDialog>
    </>
  );
};
