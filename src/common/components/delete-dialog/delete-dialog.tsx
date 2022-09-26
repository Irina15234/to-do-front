import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { DeleteInfo } from '../../../slices/types';
import { ButtonType } from '../../../custom-components/button/button';
import './delete-dialog.css';
import { Dispatch, SetStateAction } from 'react';

interface DeleteDialogProps {
  deleteInfo: DeleteInfo;
  setDeleteInfo: Dispatch<SetStateAction<DeleteInfo>>;
}

export const DeleteDialog = ({ deleteInfo, setDeleteInfo }: DeleteDialogProps) => {
  const handleClose = () => {
    setDeleteInfo({
      title: '',
      body: '',
      onDelete: () => undefined
    });
  };

  const handleDelete = () => {
    deleteInfo.onDelete();
    handleClose();
  };

  const actions = [
    {
      buttonType: ButtonType.delete,
      title: 'Delete',
      onClick: handleDelete
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleClose
    }
  ];

  return (
    <CustomDialog
      onClose={handleClose}
      actions={actions}
      open={deleteInfo.title.length > 0}
      title={`Deleting ${deleteInfo.title}`}
    >
      <div className="delete-dialog">
        <p>Are you sure you want to delete {deleteInfo.body}?</p>
      </div>
    </CustomDialog>
  );
};
