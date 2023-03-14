import { CustomDialog } from '../../../custom-components/dialog/dialog';
import React from 'react';
import { useBoardUsersDialog } from './useBoardUsersDialog';
import { CustomInput } from '../../../custom-components/input/input';
import { MainContainer } from './main-container/main-container';
import { AddUserDialog } from './add-user-dialog/add-user-dialog';

export const BoardUsersDialog = () => {
  const {
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
  } = useBoardUsersDialog();

  return (
    <CustomDialog
      open={isOpenUsersBoardDialog}
      title="Board users"
      onClose={handleCloseDialog}
      actions={actions}
      additionalActions={additionalActions}
      maxWidth="sm"
      fullWidth
    >
      <div>
        <CustomInput label="Search" onChange={changeFilterValue} colorVariant="dark" fullWidth search />
        <MainContainer
          users={filteredUsers}
          changeActiveUsers={changeActiveUsers}
          rolesListOptions={rolesListOptions}
        />
        {isOpenAddUserDialog && (
          <AddUserDialog
            changeActiveUsers={changeActiveUsers}
            handleClose={handleCloseAddUser}
            rolesListOptions={rolesListOptions}
          />
        )}
      </div>
    </CustomDialog>
  );
};
