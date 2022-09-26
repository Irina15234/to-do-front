import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../slices/types';
import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../services/auth';
import { setUserAction } from '../../slices/user/user-slice';
import { Logout, Settings } from '@mui/icons-material';

export const useUserInfo = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: State) => state.user);

  useEffect(() => {
    getUserInfo().then((res) => {
      dispatch(setUserAction(res));
    });
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickUser = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const menuList = [
    {
      icon: <Settings style={{ color: 'var(--grey-color)' }} />,
      title: 'Settings',
      onClick: () => undefined
    },
    {
      icon: <Logout style={{ color: 'var(--red-color)' }} />,
      title: 'Logout',
      onClick: () => undefined
    }
  ];

  return {
    user,
    handleClickUser,
    handleCloseUserMenu,
    anchorEl,
    menuList,
    open
  };
};
