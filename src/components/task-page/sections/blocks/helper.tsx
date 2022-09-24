import { Details } from './details/details';
import { Subtasks } from './subtasks/subtasks';
import { Dates } from './dates/dates';
import { People } from './people/people';

export enum BlockTypes {
  details = 'Details',
  subtasks = 'Subtasks',
  people = 'People',
  dates = 'Dates'
}

export const getBlockByType = (type: BlockTypes) => {
  switch (type) {
    case BlockTypes.details:
      return <Details />;
    case BlockTypes.subtasks:
      return <Subtasks />;
    case BlockTypes.people:
      return <People />;
    case BlockTypes.dates:
      return <Dates />;
    default:
      return <></>;
  }
};
