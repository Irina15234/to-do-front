import { usePhotoSection } from './usePhotoSection';
import { Avatar } from '@mui/material';
import './photo-section.css';

export const PhotoSection = () => {
  const { user } = usePhotoSection();

  return (
    <div className="photo-section">
      {user.photo && <Avatar alt="" src={user.photo} />}
      {!user.photo && <Avatar>{user?.name?.at(0)}</Avatar>}
    </div>
  );
};
