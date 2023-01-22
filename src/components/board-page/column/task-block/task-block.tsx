import { BoardTask } from '../../../../slices/types';
import './task-block.css';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { TaskBlockMain } from './task-block-main';
import { TaskBlockChildren } from './task-block-children';
import clsx from 'clsx';
import { TaskBlockHead } from './task-block-head';

interface TaskBlockProps {
  task: BoardTask;
  index: number;
  isChild?: boolean;
}

export const TaskBlock = ({ task, index, isChild }: TaskBlockProps) => {
  return (
    <Draggable isDragDisabled={isChild} key={task.id} draggableId={(task.id as number).toString()} index={index}>
      {(provided) => {
        return (
          <Link
            to={`/task/${task.id}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={isChild ? {} : { ...provided.draggableProps.style }}
          >
            <div className={clsx('task-block', { 'task-block_child': isChild })}>
              <TaskBlockHead name={task.name} taskId={task.id} />
              <TaskBlockMain task={task} />
              <TaskBlockChildren task={task} index={index} />
            </div>
          </Link>
        );
      }}
    </Draggable>
  );
};
