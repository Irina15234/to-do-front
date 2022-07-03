import { useSelector } from 'react-redux';
import { State } from '../../../../../slices/types';

export const Details = () => {
  const task = useSelector((state: State) => state.task);

  return <div className="details-block">details</div>;
};
