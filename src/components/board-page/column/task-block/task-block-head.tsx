import { CustomIconButton, IconButtonVariant } from '../../../../custom-components/icon-button/icon-button';
import { AddCircleOutline } from '@mui/icons-material';
import React from 'react';
import { CustomTooltip } from '../../../../custom-components/tooltip/tooltip';
import { useDispatch } from 'react-redux';
import { setTaskParentIdAction, toggleOpenAddTaskModalAction } from '../../../../slices/common/common-slice';

interface TaskBlockHeadProps {
  name: string;
  taskId: number;
}

export const TaskBlockHead = ({ name, taskId }: TaskBlockHeadProps) => {
  const dispatch = useDispatch();
  const handleClickAddSubtask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(toggleOpenAddTaskModalAction(true));
    dispatch(setTaskParentIdAction(taskId));
  };

  return (
    <div className="task-block__head">
      <div className="task-block__title">{name}</div>
      <div className="task-block__action">
        <CustomTooltip title="Add subtask">
          <div>
            <CustomIconButton size="small" variant={IconButtonVariant.icon} onClick={handleClickAddSubtask}>
              <AddCircleOutline fontSize="small" style={{ color: 'var(--dark-icon-color)' }} />
            </CustomIconButton>
          </div>
        </CustomTooltip>
      </div>
    </div>
  );
};
