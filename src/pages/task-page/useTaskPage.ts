import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTaskById } from '../../services/task-service';
import { Task } from '../../slices/types';
import { useDispatch } from 'react-redux';
import { setTaskAction } from '../../slices/task/task-slice';

export const useTaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [task, setTask] = useState<Task>();

  useEffect(() => {
    id &&
      getTaskById(+id).then((res) => {
        setTask(res);
        dispatch(setTaskAction(res));
      });
  }, [dispatch, id]);

  return {
    task
  };
};
