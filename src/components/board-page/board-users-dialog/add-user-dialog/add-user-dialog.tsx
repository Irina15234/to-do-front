import { CustomDialog } from '../../../../custom-components/dialog/dialog';
import { useAddUserDialog } from './useAddUserDialog';
import { FullViewBoardUser } from '../../../../slices/types';
import { CustomSelectOption } from '../../../../custom-components/select/select';
import { MainContainer } from '../main-container/main-container';
import { CustomInput } from '../../../../custom-components/input/input';
import React from 'react';

export interface AddUserDialogProps {
  handleClose: () => void;
  changeActiveUsers: (
    actionType: 'add' | 'edit' | 'delete',
    newActiveUsers?: FullViewBoardUser[] | undefined,
    newUser?: FullViewBoardUser | undefined
  ) => void;
  rolesListOptions: CustomSelectOption[];
}

export const AddUserDialog = ({ handleClose, changeActiveUsers, rolesListOptions }: AddUserDialogProps) => {
  const { actions, handleChangeCurrentUsersIds, filteredUsers, changeFilterValue } = useAddUserDialog({
    handleClose,
    changeActiveUsers,
    rolesListOptions
  });

  return (
    <CustomDialog open={true} title="New board users" onClose={handleClose} actions={actions} maxWidth="xs" fullWidth>
      <div>
        <CustomInput label="Search" onChange={changeFilterValue} colorVariant="dark" fullWidth search />
        <MainContainer
          users={filteredUsers}
          changeActiveUsers={handleChangeCurrentUsersIds}
          rolesListOptions={rolesListOptions}
          isAddModal={true}
        />
      </div>
    </CustomDialog>
  );
};
