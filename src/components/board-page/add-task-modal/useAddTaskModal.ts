import { useSelector } from 'react-redux';
import { getBoardOrTaskId } from '../../../common/helpers';
import { CreateViewTask, Priority, State, User } from '../../../slices/types';
import moment from 'moment';
import { createTask } from '../../../services/task-service';
import { ButtonType } from '../../../custom-components/button/button';
import { useFormik } from 'formik';
import { AddTaskModalProps } from './add-task-modal';
import { useEffect, useMemo, useState } from 'react';
import { getPriorities } from '../../../services/dictionary-service';
import { getUsersByBoard } from '../../../services/board-service';

interface AddTaskValues {
  name: string;
  author: string;
  executorId: number | null;
  priorityId: number;
}

export const useAddTaskModal = ({ handleClose }: AddTaskModalProps) => {
  const user = useSelector((state: State) => state.user);
  const boardId: number | null = getBoardOrTaskId();

  const [priorityList, setPriorityList] = useState<Priority[]>([]);
  const [executorsList, setExecutorsList] = useState<User[]>([]);

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
      boardId
    };

    createTask(newTask)
      .then((res) => {
        location.href = location.origin + '/task/' + res;
      })
      .catch((error) => {
        // todo
        console.log(error);
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

  return {
    formik,
    actions,
    priorityListOptions,
    executorsListOptions
  };
};
