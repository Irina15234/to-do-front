import { useDispatch, useSelector } from 'react-redux';
import { setSnackbarAction, toggleOpenAddTaskModalAction } from '../../../slices/common/common-slice';
import { CreateViewTask, Priority, State, User } from '../../../slices/types';
import { ButtonType } from '../../../custom-components/button/button';
import { getBoardOrTaskId } from '../../helpers';
import { useEffect, useMemo, useState } from 'react';
import { getPriorities } from '../../../services/dictionary-service';
import { getUsersByBoard } from '../../../services/board-service';
import moment from 'moment/moment';
import { createTask } from '../../../services/task-service';
import { useFormik } from 'formik';

interface AddTaskValues {
  name: string;
  author: string;
  executorId: number | null;
  priorityId: number;
}

export const useAddTaskDialog = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleOpenAddTaskModalAction(false));
  };

  const taskParentId = useSelector((state: State) => state.common.taskParentId);
  const user = useSelector((state: State) => state.user);
  const boardId: number | null = getBoardOrTaskId();

  const [priorityList, setPriorityList] = useState<Priority[]>([]);
  const [executorsList, setExecutorsList] = useState<User[]>([]);

  const priorityListOptions = useMemo(
    () =>
      priorityList.map((item) => {
        return {
          id: item.id,
          value: item.name,
          icon: item.icon
        };
      }),
    [priorityList]
  );

  const executorsListOptions = useMemo(() => {
    const convertedList = executorsList.map((item) => {
      return {
        id: item.id,
        value: item.name
      };
    });
    convertedList.unshift({ id: 0, value: 'Unknown' });
    return convertedList;
  }, [executorsList]);

  useEffect(() => {
    getPriorities().then((res) => {
      setPriorityList(res);
    });
    boardId &&
      getUsersByBoard(boardId).then((res) => {
        setExecutorsList(res);
      });
  }, []);

  const handleSave = (values: AddTaskValues) => {
    if (!boardId) return;

    const newTask: CreateViewTask = {
      id: null,
      authorId: user.id,
      executorId: values.executorId,
      name: values.name,
      priorityId: values.priorityId,
      columnId: 0,
      date: moment().format(),
      boardId,
      parentId: taskParentId
    };

    createTask(newTask)
      .then((res) => {
        location.href = location.origin + '/task/' + res;
      })
      .catch((error) => {
        dispatch(
          setSnackbarAction({
            message: error.response.data,
            variant: 'error',
            open: true
          })
        );
      });
  };

  const validate = (values: AddTaskValues) => {
    const errors: { [key: string]: string } = {};

    if (!values.name?.length) {
      errors.name = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    onSubmit: handleSave,
    initialValues: {
      name: '',
      author: user.name || '',
      executorId: 0,
      priorityId: priorityList.length ? priorityList[0].id : 0
    },
    validate,
    validateOnChange: false
  });

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: formik.handleSubmit
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleClose
    }
  ];

  const fields = [
    {
      type: 'input',
      name: 'name',
      label: 'Name',
      value: formik.values.name,
      error: Boolean(formik.errors.name),
      helperText: formik.errors.name
    },
    {
      type: 'select',
      labelId: 'add-task-priority',
      name: 'priorityId',
      label: 'Priority',
      value: formik.values.priorityId,
      error: Boolean(formik.errors.priorityId),
      helperText: formik.errors.priorityId,
      options: priorityListOptions
    },
    {
      type: 'input',
      name: 'author',
      label: 'Author',
      value: formik.values.author,
      error: Boolean(formik.errors.author),
      helperText: formik.errors.author,
      disabled: true
    },
    {
      type: 'select',
      labelId: 'add-task-executor',
      name: 'executorId',
      label: 'Executor',
      value: formik.values.executorId,
      error: Boolean(formik.errors.executorId),
      helperText: formik.errors.executorId,
      options: executorsListOptions
    }
  ];

  return {
    handleClose,
    actions,
    fields,
    formik
  };
};
