import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../slices/types';
import { resetDeleteInfoAction } from '../../../slices/common/common-slice';
import { ButtonType } from '../../../custom-components/button/button';
import './delete-dialog.css';

export const DeleteDialog = () => {
  const dispatch = useDispatch();

  const deleteInfo = useSelector((state: State) => state.common.deleteInfo);

  const handleClose = () => {
    dispatch(resetDeleteInfoAction());
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
