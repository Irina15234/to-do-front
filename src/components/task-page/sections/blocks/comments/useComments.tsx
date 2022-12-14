import { useEffect, useState } from 'react';
import { TaskComment, State } from '../../../../../slices/types';
import { getComments } from '../../../../../services/comment-service';
import { useDispatch, useSelector } from 'react-redux';
import { setSnackbarAction } from '../../../../../slices/common/common-slice';

export const useComments = () => {
  const dispatch = useDispatch();
  const task = useSelector((state: State) => state.task);

  const [comments, setComments] = useState<TaskComment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    task.id > -1 &&
      getComments(task.id)
        .then((res) => {
          return setComments(res);
        })
        .catch((error) => {
          dispatch(
            setSnackbarAction({
              message: error.response.data,
              variant: 'error',
              open: true
            })
          );
        })
        .finally(() => setIsLoading(false));
  }, [dispatch, task.id]);

  return {
    comments,
    isLoading
  };
};
