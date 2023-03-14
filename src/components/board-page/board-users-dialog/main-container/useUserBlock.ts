import { UserBlockProps } from './user-block';

export const useUserBlock = ({ user, changeActiveUsers, rolesListOptions }: UserBlockProps) => {
  const handleChangeUser = (actionType: 'add' | 'edit' | 'delete', newRoleId?: number) => {
    const newRole = newRoleId
      ? {
          id: newRoleId,
          name: rolesListOptions.find((role) => role.id === newRoleId)?.value.toString() || ''
        }
      : user.role;
    const newUser = { ...user, role: newRole };

    changeActiveUsers(actionType, undefined, newUser);
  };

  return {
    handleChangeUser
  };
};
