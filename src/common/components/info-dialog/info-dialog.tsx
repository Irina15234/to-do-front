import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { InfoDialogObject } from '../../../slices/types';
import React, { useCallback } from 'react';
import { ButtonType } from '../../../custom-components/button/button';

interface InfoDialogProps {
  infoDialog: InfoDialogObject;
  setInfoDialog: React.Dispatch<React.SetStateAction<InfoDialogObject>>;
}

export const InfoDialog = ({ infoDialog, setInfoDialog }: InfoDialogProps) => {
  const handleClose = useCallback(() => {
    infoDialog.onClick();
    setInfoDialog({ title: '', body: null, onClick: () => undefined });
  }, [infoDialog, setInfoDialog]);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Ok',
      onClick: handleClose
    }
  ];

  if (!infoDialog.body) return null;

  return (
    <CustomDialog onClose={handleClose} actions={actions} open={Boolean(infoDialog.body)} title={infoDialog.title}>
      <div className="info-dialog">
        <p>{infoDialog.body}</p>
      </div>
    </CustomDialog>
  );
};
