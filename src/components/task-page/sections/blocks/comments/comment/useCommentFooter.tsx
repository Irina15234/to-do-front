import React, { useContext, useState } from 'react';
import { Context } from '../../../../../layout/layout';
import { DeleteInfo } from '../../../../../../slices/types';
import { Delete, Edit } from '@mui/icons-material';

export const useCommentFooter = (changeComment: (type: string) => void) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { setDeleteInfo } = useContext(Context);

  const handleClickSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickEdit = () => {
    handleClose();
    changeComment('edit');
  };

  const deleteItem = () => {
    changeComment('delete');
  };

  const handleClickDelete = () => {
    const deleteInfo: DeleteInfo = {
      title: 'a comment',
      body: `comment`,
      onDelete: deleteItem
    };
    setDeleteInfo(deleteInfo);
    handleClose();
  };

  const menuList = [
    {
      icon: <Edit style={{ color: 'var(--grey-color)' }} />,
      title: 'Edit',
      onClick: handleClickEdit
    },
    {
      icon: <Delete style={{ color: 'var(--red-color)' }} />,
      title: 'Delete',
      onClick: handleClickDelete
    }
  ];

  return {
    handleClickSettings,
    handleClose,
    anchorEl,
    menuList,
    open
  };
};
