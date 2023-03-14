import { FullViewBoardActiveUser } from '../../../../slices/types';
import { UserBlock } from './user-block';
import { CustomSelectOption } from '../../../../custom-components/select/select';

interface MainContainerProps {
  users: FullViewBoardActiveUser[];
  changeActiveUsers: (
    actionType: 'add' | 'edit' | 'delete',
    newActiveUsers?: FullViewBoardActiveUser[] | undefined,
    newUser?: FullViewBoardActiveUser | undefined
  ) => void;
  rolesListOptions: CustomSelectOption[];
  isAddModal?: boolean;
}

export const MainContainer = ({ users, changeActiveUsers, rolesListOptions, isAddModal }: MainContainerProps) => {
  return (
    <div className="board-users__main-container">
      {users.map((user) => {
        if (user.changeType === 'delete') return null;

        return (
          <UserBlock
            key={user.id}
            user={user}
            changeActiveUsers={changeActiveUsers}
            rolesListOptions={rolesListOptions}
            isAddModal={isAddModal}
          />
        );
      })}
    </div>
  );
};
