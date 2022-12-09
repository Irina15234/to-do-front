import { useDispatch, useSelector } from 'react-redux';
import { BoardColumn, Priority, State } from '../../../../../slices/types';
import React, { useEffect, useMemo, useState } from 'react';
import { getPriorities } from '../../../../../services/dictionary-service';
import { useFormik } from 'formik';
import { SelectChangeEvent } from '@mui/material';
import { updateTaskField } from '../../../../../services/task-service';
import { getColumnsByBoard } from '../../../../../services/board-service';
import { setSnackbarAction } from '../../../../../slices/common/common-slice';

export const useDetails = () => {
  const dispatch = useDispatch();
  const task = useSelector((state: State) => state.task);

  const [priorityList, setPriorityList] = useState<Priority[]>([]);
  const [columnsList, setColumnsList] = useState<BoardColumn[]>([]);

  const initialValues = useMemo(() => {
    return {
      priorityId: task.priority.id,
      columnId: task.columnId,
      description: task.description || ''
    };
  }, [task]);

  useEffect(() => {
    getPriorities().then((res) => {
      setPriorityList(res);
    });
  }, []);

  useEffect(() => {
    task.boardId !== -1 &&
      getColumnsByBoard(task.boardId).then((res) => {
        setColumnsList(res);
      });
  }, [task.boardId]);

  const formik = useFormik({
    onSubmit: () => undefined,
    initialValues
  });

  useEffect(() => {
    formik.setValues(initialValues, false);
  }, [initialValues]);

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

  const columnsListOptions = useMemo(
    () =>
      columnsList.map((item) => {
        return {
          id: item.id,
          value: item.name
        };
      }),
    [columnsList]
  );

  const handleChangeValue = (
    event: SelectChangeEvent<unknown> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    formik.handleChange(event);

    updateTaskField(event.target.name, event.target.value, task.id).catch((error) => {
      dispatch(
        setSnackbarAction({
          message: error.response.data,
          variant: 'error',
          open: true
        })
      );
    });
  };

  const detailsList = [
    {
      type: 'select',
      label: 'Priority',
      name: 'priorityId',
      options: priorityListOptions,
      onChange: handleChangeValue,
      value: formik.values.priorityId,
      error: formik.errors.priorityId
    },
    {
      type: 'select',
      label: 'Status',
      name: 'columnId',
      options: columnsListOptions,
      onChange: handleChangeValue,
      value: formik.values.columnId,
      error: formik.errors.columnId
    },
    {
      type: 'textarea',
      label: 'Description',
      name: 'description',
      onChange: handleChangeValue,
      value: formik.values.description,
      error: formik.errors.description
    }
  ];

  return {
    detailsList
  };
};
