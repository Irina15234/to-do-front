import { useCallback, useState } from 'react';
import { ButtonType } from '../../../../custom-components/button/button';

export const usePhotoDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const toggleOpenDialog = () => {
    setIsOpenDialog((prevState) => !prevState);
  };

  const savePhoto = useCallback(() => {

  }, []);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: savePhoto
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
    actions
  };
};
