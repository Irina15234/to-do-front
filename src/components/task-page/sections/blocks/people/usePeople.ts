import { useSelector } from 'react-redux';
import { State, User } from '../../../../../slices/types';
import { useEffect, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import { getUsersByBoard } from '../../../../../services/board-service';
import { updateTaskField } from '../../../../../services/task-service';
import { SelectChangeEvent } from '@mui/material';

export const usePeople = () => {
  const task = useSelector((state: State) => state.task);
  const permissions = task.permissions || [];

  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    const boardId = task.boardId;

    boardId &&
      boardId > -1 &&
      getUsersByBoard(boardId).then((res) => {
        setUsersList(res);
      });
  }, [task.boardId]);

  const initialValues = useMemo(() => {
    const author = usersList.length ? usersList.find((user) => user.id === task.authorId)?.name || '' : '';

    return {
      author,
      executorId: task.executorId || 0
    };
  }, [task, usersList]);

  const formik = useFormik({
    onSubmit: () => undefined,
    initialValues
  });

  const handleChangeValue = (event: SelectChangeEvent<unknown>) => {
    formik.handleChange(event);

    updateTaskField(event.target.name, event.target.value, task.id).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    formik.setValues(initialValues, false);
  }, [initialValues]);

  const executorsListOptions = useMemo(() => {
    const convertedList = usersList.map((item) => {
      return {
        id: item.id,
        value: item.name
      };
    });
    convertedList.unshift({ id: 0, value: 'Unknown' });
    return convertedList;
  }, [usersList]);

  return {
    formik,
    executorsListOptions,
    handleChangeValue,
    permissions
  };
};
