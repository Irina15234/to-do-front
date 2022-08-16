import { useCallback, useEffect, useState } from 'react';
import { ButtonType } from '../../../custom-components/button/button';
import { ColumnsGroupProps } from './columns-group';
import { useDispatch, useSelector } from 'react-redux';
import { BoardTask, State } from '../../../slices/types';
import { DropResult } from 'react-beautiful-dnd';
import { setBoardTasksAction } from '../../../slices/board/board-slice';
import { updateTaskColumn } from '../../../services/task-service';
import { setSnackbarAction } from '../../../slices/common/common-slice';

export const useColumnsGroup = ({ columns, changeColumns }: ColumnsGroupProps) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state: State) => state.board.tasks);

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

  useEffect(() => {
    // todo
    const mockTasks: BoardTask[] = [
      {
        id: 1,
        name: 'task1',
        columnId: 0,
        priorityIcon: ''
      },
      {
        id: 2,
        name: 'task2',
        columnId: 0,
        priorityIcon: ''
      },
      {
        id: 3,
        name: 'task3',
        columnId: 1,
        priorityIcon: ''
      }
    ];
    dispatch(setBoardTasksAction(mockTasks));
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

  return {
    handleAddColumnClick,
    openDialog,
    handleClose,
    actions,
    columnTitle,
    setColumnTitle,
    onDragEnd
  };
};
