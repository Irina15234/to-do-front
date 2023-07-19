import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useContext, useState } from 'react';
import { setTaskParentIdAction, toggleOpenAddTaskModalAction } from '../../../../slices/common/common-slice';
import { TaskBlockHeadProps } from './task-block-head';
import { AddCircleOutline, DeleteOutline } from '@mui/icons-material';
import { Context } from '../../../layout/layout';
import { DeleteInfo, State } from '../../../../slices/types';
import { deleteTaskById } from '../../../../services/task-service';
import { setBoardTasksAction } from '../../../../slices/board/board-slice';

export const useTaskBlockHead = ({ name, taskId }: TaskBlockHeadProps) => {
  const tasks = useSelector((state: State) => state.board.tasks);

  const dispatch = useDispatch();
  const handleClickAddSubtask = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(toggleOpenAddTaskModalAction(true));
    dispatch(setTaskParentIdAction(taskId));
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { setDeleteInfo } = useContext(Context);

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const deleteItem = useCallback(() => {
    deleteTaskById(taskId).then(() => {
      const newTasks = tasks.filter((task) => {
        return task.id !== taskId;
      });
      dispatch(setBoardTasksAction(newTasks));
    });
  }, [dispatch, taskId, tasks]);

  const handleClickDelete = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const deleteInfo: DeleteInfo = {
      title: 'a task',
      body: `task ${name}`,
      onDelete: deleteItem
    };
    setDeleteInfo(deleteInfo);
  };

  const menuList = [
    {
      icon: <AddCircleOutline style={{ color: 'var(--dark-icon-color)' }} />,
      title: 'Add subtask',
      onClick: handleClickAddSubtask
    },
    {
      icon: <DeleteOutline style={{ color: 'var(--red-color)' }} />,
      title: 'Delete',
      onClick: handleClickDelete
    }
  ];

  return {
    handleClickSettings,
    handleClose,
    anchorEl,
    menuList,
    open
  };
};
