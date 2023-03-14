import { AddUserDialogProps } from './add-user-dialog';
import { ButtonType } from '../../../../custom-components/button/button';
import React, { useCallback, useEffect, useState } from 'react';
import { FullViewBoardActiveUser, FullViewBoardUser } from '../../../../slices/types';
import { getUsersByBoard } from '../../../../services/board-service';
import { BoardUserView } from '../../../../common/enums';
import { getBoardOrTaskId } from '../../../../common/helpers';

export const useAddUserDialog = ({ handleClose, changeActiveUsers, rolesListOptions }: AddUserDialogProps) => {
  const [users, setUsers] = useState<FullViewBoardUser[]>([]);
  const [currentUsersIds, setCurrentUsersIds] = useState<number[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<FullViewBoardActiveUser[]>([]);

  useEffect(() => {
    const boardId = getBoardOrTaskId();
    boardId &&
      getUsersByBoard(boardId, BoardUserView.inactive).then((res) => {
        setUsers(res as FullViewBoardUser[]);
        setFilteredUsers(res as FullViewBoardUser[]);
      });
  }, []);

  const handleClickSave = () => {
    const newUsers = users
      .filter((user) => currentUsersIds.includes(user.id))
      .map((user) => ({
        ...user,
        role: {
          id: 2,
          name: rolesListOptions.find((role) => role.id === 0)?.value.toString() || ''
        }
      }));

    newUsers.length && changeActiveUsers('add', newUsers);
    handleClose();
  };

  const handleChangeCurrentUsersIds = useCallback(
    (actionType: 'add' | 'edit' | 'delete', newActiveUsers?: FullViewBoardUser[], newUser?: FullViewBoardUser) => {
      if (!newUser) return;
      const isActiveUser = currentUsersIds.includes(newUser.id);
      const newCurrentUsersIds = isActiveUser
        ? [...currentUsersIds].filter((userId) => userId !== newUser.id)
        : [...currentUsersIds, newUser.id];

      setCurrentUsersIds(newCurrentUsersIds);
    },
    [currentUsersIds]
  );

  const changeFilterValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const filterValue = event.target.value.toLowerCase();

    if (filterValue.length) {
      const newFilteredUsers = users.filter((user) => user.name.toLowerCase().includes(filterValue));
      setFilteredUsers(newFilteredUsers);
    } else {
      setFilteredUsers(users);
    }
  };

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Add',
      onClick: handleClickSave
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleClose
    }
  ];

  return {
    actions,
    handleChangeCurrentUsersIds,
    filteredUsers,
    changeFilterValue
  };
};
