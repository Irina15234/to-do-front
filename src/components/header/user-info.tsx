import React from 'react';
import { ModalMenuItem } from '../../custom-components/menu-item/menu-item';
import { ModalMenu } from '../../custom-components/modal-menu/modal-menu';
import { useUserInfo } from './useUserInfo';
import { Settings } from '@mui/icons-material';

export const UserInfo = () => {
  const { user, handleClickUser, handleCloseUserMenu, anchorEl, menuList, open } = useUserInfo();

  return (
    <div className="header__user-block">
      <div className="header__user-name">{user.name}</div>
      <div className="header__user-img-container" role="button" tabIndex={-1} onClick={handleClickUser}>
        {user.photo && <img src={user.photo} alt="" />}
        {!user.photo && (
          <div className="header__user-icon-container">{Boolean(user.name?.length) && user.name[0].toUpperCase()}</div>
        )}
        <Settings style={{ color: 'var(--grey-color)' }} className="header__user-button-icon" />
      </div>

      <ModalMenu open={open} onClose={handleCloseUserMenu} anchorEl={anchorEl}>
        {menuList.map((item) => (
          <ModalMenuItem key={item.title} title={item.title} icon={item.icon} onClick={item.onClick} />
        ))}
      </ModalMenu>
    </div>
  );
};
