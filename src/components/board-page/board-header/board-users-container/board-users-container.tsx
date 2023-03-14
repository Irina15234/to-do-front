import { useBoardUsersContainer } from './useBoardUsersContainer';
import React from 'react';
import { CustomAvatar } from '../../../../custom-components/avatar/avatar';
import { CustomAvatarGroup } from '../../../../custom-components/avatar-group/avatar-group';

export const BoardUsersContainer = () => {
  const { users, handleClickUsers } = useBoardUsersContainer();

  return (
    <div className="board-page__users-container" onClick={handleClickUsers} tabIndex={-1} role="button">
      <CustomAvatarGroup max={3}>
        {users.map((user) => (
          <div key={`user-photo-${user.id}`}>
            {user.photo && <CustomAvatar alt="" src={user.photo} size="medium" type="img" />}
            {!user.photo && (
              <CustomAvatar size="medium" type="text">
                {user?.name?.at(0)}
              </CustomAvatar>
            )}
          </div>
        ))}
      </CustomAvatarGroup>
    </div>
  );
};
