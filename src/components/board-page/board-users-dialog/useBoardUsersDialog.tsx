import { useDispatch, useSelector } from 'react-redux';
import { FullViewBoardActiveUser, Role, State } from '../../../slices/types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { setSnackbarAction, toggleOpenUsersBoardDialogAction } from '../../../slices/common/common-slice';
import { ButtonType } from '../../../custom-components/button/button';
import { changeBoardUsers, getUsersByBoard } from '../../../services/board-service';
import { getBoardOrTaskId } from '../../../common/helpers';
import { BoardUserView } from '../../../common/enums';
import { Add } from '@mui/icons-material';
import { getRoles } from '../../../services/dictionary-service';

export const useBoardUsersDialog = () => {
  const dispatch = useDispatch();

  const isOpenUsersBoardDialog = useSelector((state: State) => state.common.isOpenUsersBoardDialog);

  const [activeUsers, setActiveUsers] = useState<FullViewBoardActiveUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<FullViewBoardActiveUser[]>([]);
  const [isOpenAddUserDialog, setIsOpenAddUserDialog] = useState<boolean>(false);
  const [rolesList, setRolesList] = useState<Role[]>([]);

  useEffect(() => {
    const boardId = getBoardOrTaskId();
    boardId &&
      getUsersByBoard(boardId, BoardUserView.full).then((res) => {
        const activeUsers = (res as FullViewBoardActiveUser[]).filter((user) => user.role);
        setActiveUsers(activeUsers);
        setFilteredUsers(activeUsers);
      });
    getRoles().then((res) => {
      setRolesList(res);
    });
  }, []);

  const handleCloseDialog = useCallback(() => {
    dispatch(toggleOpenUsersBoardDialogAction(false));
  }, [dispatch]);

  const handleSaveBoardUsers = useCallback(() => {
    const boardId = getBoardOrTaskId();
    boardId &&
      changeBoardUsers(activeUsers, boardId).then(() => {
        dispatch(
          setSnackbarAction({
            message: 'Success',
            variant: 'success',
            open: true
          })
        );

        handleCloseDialog();
      });
  }, [activeUsers, dispatch, handleCloseDialog]);

  const handleClickAddUser = useCallback(() => {
    setIsOpenAddUserDialog(true);
  }, []);

  const handleCloseAddUser = useCallback(() => {
    setIsOpenAddUserDialog(false);
  }, []);

  const actions = [
    {
      buttonType: ButtonType.standard,
      title: 'Save',
      onClick: handleSaveBoardUsers
    },
    {
      buttonType: ButtonType.neutral,
      title: 'Cancel',
      onClick: handleCloseDialog
    }
  ];

  const additionalActions = [
    {
      title: 'Add user',
      onClick: handleClickAddUser,
      icon: <Add />
    }
  ];

  const changeFilterValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const filterValue = event.target.value.toLowerCase();
    const newFilteredUsers = activeUsers.filter((user) => user.name.toLowerCase().includes(filterValue));

    setFilteredUsers(newFilteredUsers);
  };

  const changeActiveUsers = useCallback(
    (
      actionType: 'add' | 'edit' | 'delete',
      newActiveUsers?: FullViewBoardActiveUser[],
      newUser?: FullViewBoardActiveUser
    ) => {
      if (actionType === 'add') {
        const newActiveUsersWithType = newActiveUsers?.map((user) => ({ ...user, changeType: 'add' })) || [];
        newActiveUsers && setActiveUsers([...activeUsers, ...newActiveUsersWithType]);
        newActiveUsers && setFilteredUsers([...activeUsers, ...newActiveUsersWithType]);
      }
      if (actionType === 'edit' && newUser) {
        const userIndex = activeUsers.findIndex((user) => user.id === newUser.id);
        const newUsers = [...activeUsers].map((user, index) =>
          userIndex === index
            ? {
                ...newUser,
                changeType: 'edit'
              }
            : user
        );

        setActiveUsers(newUsers);
        setFilteredUsers(newUsers);
      }
      if (actionType === 'delete' && newUser) {
        const userIndex = activeUsers.findIndex((user) => user.id === newUser.id);
        const newUsers = [...activeUsers].map((user, index) =>
          userIndex === index
            ? {
                ...user,
                changeType: 'delete'
              }
            : user
        );

        setActiveUsers(newUsers);
        setFilteredUsers(newUsers);
      }
    },
    [activeUsers]
  );

  const rolesListOptions = useMemo(() => rolesList.map((role) => ({ id: role.id, value: role.name })), [rolesList]);

  return {
    isOpenUsersBoardDialog,
    handleCloseDialog,
    actions,
    filteredUsers,
    changeFilterValue,
    changeActiveUsers,
    additionalActions,
    isOpenAddUserDialog,
    handleCloseAddUser,
    rolesListOptions
  };
};
