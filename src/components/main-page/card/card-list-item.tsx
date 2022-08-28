import { Link } from 'react-router-dom';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { MoreVert } from '@mui/icons-material';
import React from 'react';
import { ModalMenu } from '../../../custom-components/modal-menu/modal-menu';
import { MainViewBoard, MainViewTask } from '../../../slices/types';
import { ModalMenuItem } from '../../../custom-components/menu-item';
import clsx from 'clsx';
import { useCardListItem } from './useCardListItem';

export enum CardType {
  board = 'board',
  task = 'task'
}

export interface CardListItemProps {
  source: MainViewBoard | MainViewTask;
  type: CardType;
  updateSourceListAfterDeleting: (sourceId: number) => void;
}

export const CardListItem = ({ source, type, updateSourceListAfterDeleting }: CardListItemProps) => {
  const { handleClickSettings, handleClose, anchorEl, menuList, open } = useCardListItem({
    source,
    type,
    updateSourceListAfterDeleting
  });

  return (
    <>
      <Link to={`${type}/${source.id}`} className={clsx({ 'card-list-item__task-link': type === CardType.task })}>
        <div className="card-list-item">
          {type === CardType.task && (
            <div className="card-list-item__icon item-with-right-margin">
              <img alt="" src={(source as MainViewTask).priorityIcon} />
            </div>
          )}
          <div className="card-list-item__name">{source.name}</div>
          <CustomIconButton variant={IconButtonVariant.icon} onClick={handleClickSettings}>
            <MoreVert style={{ color: 'var(--button-color)' }} />
          </CustomIconButton>
        </div>
      </Link>

      <ModalMenu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {menuList.map((item) => (
          <ModalMenuItem key={item.title} {...item} />
        ))}
      </ModalMenu>
    </>
  );
};
