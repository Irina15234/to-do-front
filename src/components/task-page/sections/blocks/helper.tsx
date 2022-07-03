import { Details } from './details/details';

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
      return <Details />;
    case BlockTypes.people:
      return <Details />;
    case BlockTypes.dates:
      return <Details />;
    default:
      return <></>;
  }
};
