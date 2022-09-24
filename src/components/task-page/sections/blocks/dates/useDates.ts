import { useSelector } from 'react-redux';
import { State } from '../../../../../slices/types';
import { useEffect, useMemo } from 'react';
import { useFormik } from 'formik';

export const useDates = () => {
  const task = useSelector((state: State) => state.task);

  const initialValues = useMemo(() => {
    return {
      date: task.date
    };
  }, [task]);

  const handleSave = () => {
    // todo edit
  };

  const formik = useFormik({
    onSubmit: handleSave,
    initialValues
  });

  useEffect(() => {
    formik.setValues(initialValues, false);
  }, [initialValues]);

  return {
    formik
  };
};
