import React from 'react';
import { ButtonType, CustomButton } from '../../../../custom-components/button/button';
import { BoardColumn, Task } from '../../../../slices/types';
import { TaskBlock } from '../task-block/task-block';
import { Droppable } from 'react-beautiful-dnd';

interface ColumnBodyProps {
  column: BoardColumn;
}

export const ColumnBody = ({ column }: ColumnBodyProps) => {
  const handleAddTask = () => {
    console.log(column);
  };

  // todo
  const mockTasks: Task[] = [
    {
      id: 1,
      authorId: 1,
      executorId: 1,
      name: 'task1',
      priorityName: 'minor',
      columnId: 0,
      date: '',
      boardId: 11
    },
    {
      id: 2,
      authorId: 1,
      executorId: 1,
      name: 'task2',
      priorityName: 'minor',
      columnId: 0,
      date: '',
      boardId: 11
    },
    {
      id: 3,
      authorId: 1,
      executorId: 1,
      name: 'task3',
      priorityName: 'minor',
      columnId: 1,
      date: '',
      boardId: 11
    }
  ];

  return (
    <Droppable droppableId={column.id.toString()} key={column.id}>
      {(provided, snapshot) => {
        return (
          <div className="column__main" {...provided.droppableProps} ref={provided.innerRef}>
            {mockTasks.map((task, index) => {
              if (task.columnId === column.id) return <TaskBlock key={task.id} task={task} index={index} />;

              return null;
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
