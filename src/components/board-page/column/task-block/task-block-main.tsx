import { BoardTask } from '../../../../slices/types';
import React from 'react';
import { CustomTooltip } from '../../../../custom-components/tooltip/tooltip';
import { Avatar } from '@mui/material';

interface TaskBlockMainProps {
  task: BoardTask;
}

export const TaskBlockMain = ({ task }: TaskBlockMainProps) => {
  return (
    <div className="task-block__main">
      <div className="task-block__main_left">
        <img src={task.priorityIcon} width={14} height={14} alt="" />
      </div>
      <div className="task-block__main_right">
        <CustomTooltip title={task.executorName || 'Unknown'}>
          <div>
            {task.executorPhoto && <Avatar sx={{ width: 24, height: 24 }} alt="" src={task.executorPhoto} />}
            {!task.executorPhoto && (
              <Avatar sx={{ width: 24, height: 24 }}>{(task.executorName || 'Unknown').at(0)}</Avatar>
            )}
          </div>
        </CustomTooltip>
      </div>
    </div>
  );
};
