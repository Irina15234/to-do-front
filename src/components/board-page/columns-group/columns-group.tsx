import { BoardColumn } from '../../../slices/types';
import { Column } from '../column/column';
import './columns-group.css';
import { isEditPage, isNewPage } from '../../../common/helpers';
import { AddCircleOutline } from '@mui/icons-material';
import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { useCallback, useState } from 'react';

interface ColumnsGroupProps {
  columns: BoardColumn[];
}

export const ColumnsGroup = ({ columns }: ColumnsGroupProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, [setOpenDialog]);

  return (
    <div className="columns-group">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
      {(isEditPage() || isNewPage()) && (
        <div className="columns-group__add" role="button" onClick={handleClick}>
          <AddCircleOutline style={{ color: 'var(--dark-icon-color)' }} />
          <span className="columns-group__add-title">Add column</span>
        </div>
      )}
      <CustomDialog open={openDialog} title="New column" onClose={handleClose}>
        <div>123</div>
      </CustomDialog>
    </div>
  );
};
