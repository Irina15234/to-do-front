import { useCallback, useEffect, useState } from 'react';
import { ButtonType } from '../../../custom-components/button/button';
import { ColumnsGroupProps } from './columns-group';
import { useDispatch, useSelector } from 'react-redux';
import { BoardColumn, State } from '../../../slices/types';
import { DropResult } from 'react-beautiful-dnd';
import { setBoardTasksAction } from '../../../slices/board/board-slice';
import { getTasksByBoard, updateTaskColumn } from '../../../services/task-service';
import { setSnackbarAction } from '../../../slices/common/common-slice';
import { getBoardOrTaskId, isEditPage } from '../../../common/helpers';
import { isNumber } from 'lodash';
import { addColumn, deleteColumnByBoard, renameColumn } from '../../../services/board-service';

export const useColumnsGroup = ({ columns, changeColumns }: ColumnsGroupProps) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state: State) => state.board.tasks);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [columnTitle, setColumnTitle] = useState<string>('Column');
  const [editColumnId, setEditColumnId] = useState<number | null>(null);

  const handleAddColumnClick = () => {
    setOpenDialog(true);
    setColumnTitle('Column');
  };

  const handleClose = useCallback(() => {
    setOpenDialog(false);
    setColumnTitle('');
    setEditColumnId(null);
  }, []);

  const handleSave = useCallback(() => {
    const boardId: number | null = getBoardOrTaskId();

    if (isNumber(editColumnId)) {
      const newColumns = [...columns].map((column) => {
        return column.id === editColumnId ? { ...column, name: columnTitle } : column;
      });

      boardId &&
        isEditPage() &&
        renameColumn(
          {
            id: editColumnId,
            name: columnTitle
          },
          boardId
        )
          .then(() => changeColumns(newColumns))
          .catch((error) =>
            dispatch(
              setSnackbarAction({
                message: error.response.data,
                variant: 'error',
                open: true
              })
            )
          );

      !isEditPage() && changeColumns(newColumns);
    } else {
      const newColumn = {
        id: columns.length ? (columns.at(-1) as BoardColumn).id + 1 : 0,
        name: columnTitle
      };

      const newColumns = [...columns, newColumn];

      boardId &&
        isEditPage() &&
        addColumn(newColumn, boardId)
          .then(() => changeColumns(newColumns))
          .catch((error) =>
            dispatch(
              setSnackbarAction({
                message: error.response.data,
                variant: 'error',
                open: true
              })
            )
          );

      !isEditPage() && changeColumns(newColumns);
    }
    handleClose();
  }, [editColumnId, handleClose, columns, columnTitle, changeColumns, dispatch]);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: handleSave,
      disabled: !columnTitle.length
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
          dispatch(setSnackbarAction({ message: error.response.data, variant: 'error', open: true }));
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
          dispatch(setSnackbarAction({ message: error.response.data, variant: 'error', open: true }));
        });
    }
  };

  const handleEditColumnTitle = useCallback(
    (columnId: number) => {
      setOpenDialog(true);
      setEditColumnId(columnId);
      const columnTitle = columns.find((column) => column.id === columnId)?.name;
      setColumnTitle(columnTitle || 'Column');
    },
    [columns]
  );

  const handleDeleteColumn = useCallback(
    (columnId: number) => {
      const boardId: number | null = getBoardOrTaskId();
      const newColumns = [...columns].filter((column) => column.id !== columnId);
      boardId &&
        isEditPage() &&
        deleteColumnByBoard(columnId, boardId)
          .then(() => changeColumns(newColumns))
          .catch((error) => {
            dispatch(setSnackbarAction({ message: error.response.data, variant: 'error', open: true }));
          });
      !isEditPage() && changeColumns(newColumns);
    },
    [changeColumns, columns, dispatch]
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
    },
    editColumnId
  };
};
