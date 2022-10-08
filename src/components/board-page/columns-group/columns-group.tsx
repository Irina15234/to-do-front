import { BoardColumn } from '../../../slices/types';
import { Column } from '../column/column';
import './columns-group.css';
import { isEditPage, isNewPage } from '../../../common/helpers';
import { AddCircleOutline } from '@mui/icons-material';
import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { CustomInput } from '../../../custom-components/input/input';
import { useColumnsGroup } from './useColumnsGroup';
import { DragDropContext } from 'react-beautiful-dnd';
import { isNumber } from 'lodash';

export interface ColumnsGroupProps {
  columns: BoardColumn[];
  changeColumns: (newColumns: BoardColumn[]) => void;
}

export const ColumnsGroup = ({ columns, changeColumns }: ColumnsGroupProps) => {
  const {
    handleAddColumnClick,
    openDialog,
    handleClose,
    actions,
    columnTitle,
    setColumnTitle,
    onDragEnd,
    columnsAction,
    editColumnId
  } = useColumnsGroup({
    columns,
    changeColumns
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="columns-group">
        {columns?.map((column) => (
          <Column key={column.id} column={column} columnsAction={columnsAction} />
        ))}
        {(isEditPage() || isNewPage()) && (
          <div className="columns-group__add" role="button" onClick={handleAddColumnClick}>
            <AddCircleOutline style={{ color: 'var(--dark-icon-color)' }} />
            <span className="columns-group__add-title">Add column</span>
          </div>
        )}
        <CustomDialog
          open={openDialog}
          title={isNumber(editColumnId) ? 'Edit column' : 'New column'}
          onClose={handleClose}
          actions={actions}
        >
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
    </DragDropContext>
  );
};
