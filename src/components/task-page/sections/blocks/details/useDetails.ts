import { useSelector } from 'react-redux';
import { Priority, State } from '../../../../../slices/types';
import { useEffect, useMemo, useState } from 'react';
import { getPriorities } from '../../../../../services/dictionary-service';
import { useFormik } from 'formik';
import { SelectChangeEvent } from '@mui/material';
import { updateTaskField } from '../../../../../services/task-service';

export const useDetails = () => {
  const task = useSelector((state: State) => state.task);

  const [priorityList, setPriorityList] = useState<Priority[]>([]);

  const initialValues = useMemo(() => {
    return {
      priorityId: task.priority.id
    };
  }, [task]);

  useEffect(() => {
    getPriorities().then((res) => {
      setPriorityList(res);
    });
  }, []);

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

  const handleChangeValue = (event: SelectChangeEvent<unknown>) => {
    formik.handleChange(event);

    updateTaskField(event.target.name, event.target.value, task.id).catch((error) => {
      console.log(error);
    });
  };

  return {
    formik,
    priorityListOptions,
    handleChangeValue
  };
};
