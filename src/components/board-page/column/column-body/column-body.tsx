import React from 'react';
import { BoardColumn, State } from '../../../../slices/types';
import { TaskBlock } from '../task-block/task-block';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { isEditPage } from '../../../../common/helpers';

interface ColumnBodyProps {
  column: BoardColumn;
}

export const ColumnBody = ({ column }: ColumnBodyProps) => {
  const tasks = useSelector((state: State) => state.board.tasks)?.filter((task) => task.columnId === column.id) || [];

  return (
    <Droppable droppableId={column.id.toString()} key={column.id}>
      {(provided) => {
        return (
          <div className="column__main" {...provided.droppableProps} ref={provided.innerRef}>
            {!isEditPage() &&
              tasks.map((task, index) => {
                return <TaskBlock key={task.id} task={task} index={index} />;
              })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
