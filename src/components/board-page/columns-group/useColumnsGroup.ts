import { useCallback, useEffect, useState } from 'react';
import { ButtonType } from '../../../custom-components/button/button';
import { ColumnsGroupProps } from './columns-group';
import { useDispatch, useSelector } from 'react-redux';
import { BoardColumn, State } from '../../../slices/types';
import { DropResult } from 'react-beautiful-dnd';
import { setBoardTasksAction } from '../../../slices/board/board-slice';
import { getTasksByBoard, updateTaskColumn } from '../../../services/task-service';
import { setSnackbarAction } from '../../../slices/common/common-slice';
import { getBoardOrTaskId } from '../../../common/helpers';
import { isNumber } from 'lodash';

export const useColumnsGroup = ({ columns, changeColumns }: ColumnsGroupProps) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state: State) => state.board.tasks);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [columnTitle, setColumnTitle] = useState<string>('');
  const [editColumnId, setEditColumnId] = useState<number | null>(null);

  const handleAddColumnClick = () => {
    setOpenDialog(true);
  };

  const handleClose = useCallback(() => {
    setOpenDialog(false);
    setColumnTitle('');
    setEditColumnId(null);
  }, []);

  const handleSave = useCallback(() => {
    if (isNumber(editColumnId)) {
      const newColumns = [...columns].map((column) => {
        return column.id === editColumnId ? { ...column, name: columnTitle } : column;
      });
      changeColumns(newColumns);
    } else {
      changeColumns([
        ...columns,
        {
          id: columns.length ? (columns.at(-1) as BoardColumn).id + 1 : 0,
          name: columnTitle
        }
      ]);
    }
    handleClose();
  }, [editColumnId, handleClose, changeColumns, columns, columnTitle]);

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

  useEffect(() => {
    const boardId: number | null = getBoardOrTaskId();

    boardId &&
      getTasksByBoard(boardId)
        .then((res) => {
          dispatch(setBoardTasksAction(res));
        })
        .catch((error) => {
          // todo
        });
  }, [dispatch]);

  const onDragEnd = (result: DropResult) => {
    const sourceColumnId = parseInt(result.source.droppableId);
    const targetColumnId = parseInt(result.destination?.droppableId || '-1');

    if (targetColumnId > -1) {
      const taskIndex = result.source.index;
      const taskId = tasks.filter((task) => task.columnId === sourceColumnId)[taskIndex].id;

      updateTaskColumn(sourceColumnId, targetColumnId, taskId)
        .then()
        .catch((error) => {
          dispatch(setSnackbarAction({ message: error.message, variant: 'error', open: true }));
        });
    }
  };

  const handleEditColumnTitle = useCallback(
    (columnId: number) => {
      setOpenDialog(true);
      setEditColumnId(columnId);
      const columnTitle = columns.find((column) => column.id === columnId)?.name;
      setColumnTitle(columnTitle || '');
    },
    [columns]
  );

  const handleDeleteColumn = useCallback(
    (columnId: number) => {
      const newColumns = [...columns].filter((column) => column.id !== columnId);
      changeColumns(newColumns);
    },
    [changeColumns, columns]
  );

  return {
    handleAddColumnClick,
    openDialog,
    handleClose,
    actions,
    columnTitle,
    setColumnTitle,
    onDragEnd,
    columnsAction: {
      handleEditColumnTitle,
      handleDeleteColumn
    }
  };
};
