import { BoardColumn } from '../../../slices/types';
import { Column } from '../column/column';
import './columns-group.css';
import { isEditPage, isNewPage } from '../../../common/helpers';
import { AddCircleOutline } from '@mui/icons-material';
import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { useCallback, useState } from 'react';
import { ButtonType } from '../../../custom-components/button/button';
import { CustomInput } from '../../../custom-components/input/input';

interface ColumnsGroupProps {
  columns: BoardColumn[];
  changeColumns: (newColumns: BoardColumn[]) => void;
}

export const ColumnsGroup = ({ columns, changeColumns }: ColumnsGroupProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [columnTitle, setColumnTitle] = useState<string>('');

  const handleAddColumnClick = () => {
    setOpenDialog(true);
  };

  const handleSave = useCallback(() => {
    changeColumns([...columns, { id: columns.length, name: columnTitle }]);
    setOpenDialog(false);
    setColumnTitle('');
  }, [columns, changeColumns, columnTitle]);

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, [setOpenDialog]);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: handleSave
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleClose
    }
  ];

  return (
    <div className="columns-group">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
      {(isEditPage() || isNewPage()) && (
        <div className="columns-group__add" role="button" onClick={handleAddColumnClick}>
          <AddCircleOutline style={{ color: 'var(--dark-icon-color)' }} />
          <span className="columns-group__add-title">Add column</span>
        </div>
      )}
      <CustomDialog open={openDialog} title="New column" onClose={handleClose} actions={actions}>
        <div>
          <CustomInput
            value={columnTitle}
            label="Title"
            onChange={(event) => setColumnTitle(event.target.value)}
            colorVariant="dark"
            fullWidth={true}
          />
        </div>
      </CustomDialog>
    </div>
  );
};
