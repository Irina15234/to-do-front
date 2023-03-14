import { FullViewBoardActiveUser } from '../../../../slices/types';
import { CustomSelect, CustomSelectOption } from '../../../../custom-components/select/select';
import { useUserBlock } from './useUserBlock';
import { CustomAvatar } from '../../../../custom-components/avatar/avatar';
import React from 'react';
import { CustomIconButton, IconButtonVariant } from '../../../../custom-components/icon-button/icon-button';
import { DeleteOutline } from '@mui/icons-material';
import './user-block.css';
import { CustomCheckbox } from '../../../../custom-components/checkbox/checkbox';

export interface UserBlockProps {
  user: FullViewBoardActiveUser;
  changeActiveUsers: (
    actionType: 'add' | 'edit' | 'delete',
    newActiveUsers?: FullViewBoardActiveUser[] | undefined,
    newUser?: FullViewBoardActiveUser | undefined
  ) => void;
  rolesListOptions: CustomSelectOption[];
  isAddModal?: boolean;
}

export const UserBlock = ({ user, changeActiveUsers, rolesListOptions, isAddModal }: UserBlockProps) => {
  const { handleChangeUser } = useUserBlock({ user, changeActiveUsers, rolesListOptions });

  return (
    <div className="board-users__user-block">
      {isAddModal && (
        <div className="board-users__user-block__action">
          <CustomCheckbox value={false} onChange={() => handleChangeUser('add')} />
        </div>
      )}
      <div className="board-users__user-block__main-container">
        <div className="board-users__user-block__main">
          <>
            {user.photo && <CustomAvatar alt="" src={user.photo} size="large" type="img" />}
            {!user.photo && (
              <CustomAvatar size="large" type="text">
                {user?.name?.at(0)}
              </CustomAvatar>
            )}
          </>
          <div className="board-users__user-block__name">{user.name}</div>
          <div>
            {!isAddModal && (
              <CustomIconButton variant={IconButtonVariant.icon} onClick={() => handleChangeUser('delete')}>
                <DeleteOutline style={{ color: 'var(--red-color)' }} />
              </CustomIconButton>
            )}
          </div>
        </div>
        {!isAddModal && (
          <div className="board-users__user-block__roles">
            <CustomSelect
              labelId="user-role"
              label="Role"
              options={rolesListOptions}
              onChange={(event) => handleChangeUser('edit', event.target.value as number)}
              value={user.role?.id || 0}
              colorVariant="dark"
              fullWidth
            />
          </div>
        )}
      </div>
    </div>
  );
};
