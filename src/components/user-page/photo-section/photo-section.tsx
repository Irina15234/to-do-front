import { usePhotoSection } from './usePhotoSection';
import './photo-section.css';
import { PhotoDialog } from './photo-dialog/photo-dialog';
import { CustomAvatar } from '../../../custom-components/avatar/avatar';
import React from 'react';

export const PhotoSection = () => {
  const { user } = usePhotoSection();

  return (
    <div className="photo-section">
      {user.photo && <CustomAvatar alt="" src={user.photo} size="large" type="img" />}
      {!user.photo && (
        <CustomAvatar size="large" type="text">
          {user?.name?.at(0)}
        </CustomAvatar>
      )}
      <PhotoDialog />
    </div>
  );
};
