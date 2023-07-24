import { Details } from './details/details';
import { Dates } from './dates/dates';
import { People } from './people/people';
import { Comments } from './comments/comments';

export enum BlockTypes {
  details = 'Details',
  people = 'People',
  dates = 'Dates',
  comments = 'Comments'
}

export const getBlockByType = (type: BlockTypes) => {
  switch (type) {
    case BlockTypes.details:
      return <Details />;
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
