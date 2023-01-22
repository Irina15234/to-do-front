import { BoardTask } from '../../../../slices/types';
import { TaskBlock } from './task-block';
import React from 'react';

interface TaskBlockChildrenProps {
  task: BoardTask;
  index: number;
}

export const TaskBlockChildren = ({ task, index }: TaskBlockChildrenProps) => {
  return (
    <>
      {task.children?.map((child) => (
        <TaskBlock key={child.id} task={child} index={index} isChild={true} />
      ))}
    </>
  );
};
