import { useSelector } from 'react-redux';
import { State } from '../../../slices/types';

export const usePhotoSection = () => {
  const user = useSelector((state: State) => state.user);

  return { user };
};
