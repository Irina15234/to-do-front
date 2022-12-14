import { Details } from './details/details';
import { Subtasks } from './subtasks/subtasks';
import { Dates } from './dates/dates';
import { People } from './people/people';
import { Comments } from './comments/comments';

export enum BlockTypes {
  details = 'Details',
  subtasks = 'Subtasks',
  people = 'People',
  dates = 'Dates',
  comments = 'Comments'
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
    case BlockTypes.comments:
      return <Comments />;
    default:
      return <></>;
  }
};
