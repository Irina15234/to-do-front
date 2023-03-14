import { getBoardOrTaskId, isEditPage, isNewPage } from '../../../common/helpers';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { Edit, Settings } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoardUsersContainer } from './board-users-container/board-users-container';

interface BoardHeaderProps {
  boardName: string;
  handleClickTitleEdit: () => void;
}

export const BoardHeader = ({ boardName, handleClickTitleEdit }: BoardHeaderProps) => {
  return (
    <div className="board-page__header-container">
      <div className="board-page__title-container">
        <div className="board-page__title item-with-right-margin">{boardName || 'Board'}</div>
        {(isNewPage() || isEditPage()) && (
          <CustomIconButton variant={IconButtonVariant.icon} onClick={handleClickTitleEdit}>
            <Edit style={{ color: 'var(--grey-color)' }} />
          </CustomIconButton>
        )}
      </div>

      {!(isNewPage() || isEditPage()) && (
        <Link to={`/board/${getBoardOrTaskId()}/edit`} className="icon-link">
          <CustomIconButton variant={IconButtonVariant.icon} size="small">
            <Settings style={{ color: 'var(--grey-color)' }} fontSize="small" />
          </CustomIconButton>
        </Link>
      )}

      <BoardUsersContainer />
    </div>
  );
};
