import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTaskById } from '../../services/task-service';
import { Task } from '../../slices/types';
import { useDispatch } from 'react-redux';
import { setTaskAction } from '../../slices/task/task-slice';
import { Typography } from '@mui/material';
import { useUpdateStatus } from '../../common/hooks/useUpdateStatus';

export const useTaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useUpdateStatus();

  const [task, setTask] = useState<Task>();

  useEffect(() => {
    id &&
      getTaskById(+id).then((res) => {
        setTask(res);
        dispatch(setTaskAction(res));
      });
  }, [dispatch, id]);

  const breadcrumbs = [
    <Link key="1" to={`/board/${task?.boardId}`}>
      {task?.boardName}
    </Link>,
    <Typography key="2">{task?.name}</Typography>
  ];

  return {
    task,
    breadcrumbs
  };
};
