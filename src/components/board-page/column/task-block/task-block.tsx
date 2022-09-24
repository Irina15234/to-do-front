import { BoardTask } from '../../../../slices/types';
import './task-block.css';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';

interface TaskBlockProps {
  task: BoardTask;
  index: number;
}

export const TaskBlock = ({ task, index }: TaskBlockProps) => {
  return (
    <Draggable key={task.id} draggableId={(task.id as number).toString()} index={index}>
      {(provided) => {
        return (
          <Link
            to={`/task/${task.id}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style
            }}
          >
            <div className="task-block">
              <div className="task-block__head">
                <div className="task-block__title">{task.name}</div>
              </div>
              <div className="task-block__main"></div>
            </div>
          </Link>
        );
      }}
    </Draggable>
  );
};
