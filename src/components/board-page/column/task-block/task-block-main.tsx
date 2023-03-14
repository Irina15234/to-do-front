import { BoardTask } from '../../../../slices/types';
import React from 'react';
import { CustomTooltip } from '../../../../custom-components/tooltip/tooltip';
import { CustomAvatar } from '../../../../custom-components/avatar/avatar';

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
            {task.executorPhoto && <CustomAvatar alt="" src={task.executorPhoto} size="small" type="img" />}
            {!task.executorPhoto && (
              <CustomAvatar size="small" type="text">
                {(task.executorName || 'Unknown').at(0)}
              </CustomAvatar>
            )}
          </div>
        </CustomTooltip>
      </div>
    </div>
  );
};
