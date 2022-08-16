import React from 'react';
import { ButtonType, CustomButton } from '../../../../custom-components/button/button';
import { BoardColumn, State } from '../../../../slices/types';
import { TaskBlock } from '../task-block/task-block';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

interface ColumnBodyProps {
  column: BoardColumn;
}

export const ColumnBody = ({ column }: ColumnBodyProps) => {
  const handleAddTask = () => {
    console.log(column);
  };

  const tasks = useSelector((state: State) => state.board.tasks)?.filter((task) => task.columnId === column.id) || [];

  return (
    <Droppable droppableId={column.id.toString()} key={column.id}>
      {(provided) => {
        return (
          <div className="column__main" {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => {
              return <TaskBlock key={task.id} task={task} index={index} />;
            })}

            {!column.id && (
              <CustomButton
                buttonType={ButtonType.add}
                startIconColor="var(--dark-background-color)"
                onClick={handleAddTask}
                fullWidth
              >
                Add new task
              </CustomButton>
            )}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
