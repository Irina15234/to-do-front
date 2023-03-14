import { useEffect, useState } from 'react';
import { User } from '../../../../slices/types';
import { getUsersByBoard } from '../../../../services/board-service';
import { getBoardOrTaskId } from '../../../../common/helpers';
import { useDispatch } from 'react-redux';
import { toggleOpenUsersBoardDialogAction } from '../../../../slices/common/common-slice';

export const useBoardUsersContainer = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const boardId = getBoardOrTaskId();
    boardId &&
      getUsersByBoard(boardId).then((res) => {
        setUsers(res);
      });
  }, []);

  const handleClickUsers = () => {
    dispatch(toggleOpenUsersBoardDialogAction(true));
  };

  return {
    users,
    handleClickUsers
  };
};
