import { useCallback, useState } from 'react';
import { ButtonType } from '../../../../custom-components/button/button';
import { useDispatch } from 'react-redux';
import { fileToBase64 } from '../../../../common/helpers';
import { updateUserPhoto } from '../../../../services/user';
import { setSnackbarAction } from '../../../../slices/common/common-slice';
import { setUserPhotoAction } from '../../../../slices/user/user-slice';

export const usePhotoDialog = () => {
  const dispatch = useDispatch();

  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const toggleOpenDialog = () => {
    setIsOpenDialog((prevState) => !prevState);
  };

  const [file, setFile] = useState<File | null>(null);

  const changeFile = useCallback((newFile: File | null) => {
    setFile(newFile);
  }, []);

  const savePhoto = useCallback(() => {
    if (!file) {
      toggleOpenDialog();
      return;
    }
    fileToBase64(file).then((image) => {
      updateUserPhoto(image)
        .then(() => {
          toggleOpenDialog();
          dispatch(setUserPhotoAction(image));
        })
        .catch((error) => {
          dispatch(
            setSnackbarAction({
              message: error.response.data,
              variant: 'error',
              open: true
            })
          );
        });
    });
  }, [dispatch, file]);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: savePhoto,
      disabled: !file
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: toggleOpenDialog
    }
  ];

  return {
    isOpenDialog,
    toggleOpenDialog,
    actions,
    changeFile
  };
};
