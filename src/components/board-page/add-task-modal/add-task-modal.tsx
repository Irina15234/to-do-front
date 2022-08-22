import { CustomDialog } from '../../../custom-components/dialog/dialog';
import { ButtonType } from '../../../custom-components/button/button';
import { getBoardOrTaskId } from '../../../common/helpers';
import { createTask } from '../../../services/task-service';
import { Task } from '../../../slices/types';
import { useDispatch } from 'react-redux';
import { CustomInput } from '../../../custom-components/input/input';
import { useState } from 'react';
import { setTaskAction } from '../../../slices/task/task-slice';
import moment from 'moment';

interface AddTaskModalProps {
  handleClose: () => void;
}

export const AddTaskModal = ({ handleClose }: AddTaskModalProps) => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');

  const handleSave = () => {
    const boardId: number | null = getBoardOrTaskId();

    if (!boardId) return;

    const newTask: Task = {
      id: null,
      authorId: 1,
      executorId: 1,
      name: name,
      priorityName: 'minor',
      columnId: 0,
      date: moment().format(),
      boardId
    };

    createTask(newTask)
      .then((res) => {
        location.href = location.origin + '/task/' + res;
        dispatch(setTaskAction({ ...newTask, id: res }));
        console.log({ ...newTask, id: res });
      })
      .catch((error) => {
        // todo
        console.log(error);
      });
  };

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: handleSave
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleClose
    }
  ];

  return (
    <CustomDialog onClose={handleClose} actions={actions} open={true} title="New task">
      <div>
        <CustomInput
          value={name}
          label="Name"
          onChange={(event) => setName(event.target.value)}
          colorVariant="dark"
          fullWidth
        />
      </div>
    </CustomDialog>
  );
};
