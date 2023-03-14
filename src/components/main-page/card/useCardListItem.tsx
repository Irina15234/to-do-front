import React, { useCallback, useContext, useState } from 'react';
import { DeleteOutline, Edit } from '@mui/icons-material';
import { CardListItemProps, CardType } from './card-list-item';
import { DeleteInfo } from '../../../slices/types';
import { deleteTaskById } from '../../../services/task-service';
import { deleteBoardById } from '../../../services/board-service';
import { Context } from '../../layout/layout';

export const useCardListItem = ({ source, type, updateSourceListAfterDeleting }: CardListItemProps) => {
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
    const path = type === CardType.task ? '/task/' : '/board/';
    const endPath = type === CardType.task ? '' : 'edit';
    location.href = location.origin + path + source.id + endPath;
  };

  const deleteItem = useCallback(() => {
    const deleteItem = type === CardType.task ? deleteTaskById : deleteBoardById;
    deleteItem(source.id).then(() => {
      updateSourceListAfterDeleting(source.id);
    });
  }, [source.id, type, updateSourceListAfterDeleting]);

  const handleClickDelete = () => {
    const deleteInfo: DeleteInfo = {
      title: type === CardType.task ? 'a task' : 'a board',
      body: type === CardType.task ? `task ${source.name}` : `board ${source.name}`,
      onDelete: deleteItem
    };
    setDeleteInfo(deleteInfo);
  };

  const menuList = [
    {
      icon: <Edit style={{ color: 'var(--grey-color)' }} />,
      title: 'Edit',
      onClick: handleClickEdit
    },
    {
      icon: <DeleteOutline style={{ color: 'var(--red-color)' }} />,
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
