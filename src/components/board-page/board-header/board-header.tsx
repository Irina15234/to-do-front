import { isEditPage, isNewPage } from '../../../common/helpers';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { Edit } from '@mui/icons-material';
import React from 'react';

interface BoardHeaderProps {
  boardName: string;
  handleClickTitleEdit: () => void;
}

export const BoardHeader = ({ boardName, handleClickTitleEdit }: BoardHeaderProps) => {
  return (
    <div className="board-page__header-container">
      <div className="board-page__title">{boardName || 'Board'}</div>
      {(isNewPage() || isEditPage()) && (
        <CustomIconButton variant={IconButtonVariant.icon} onClick={handleClickTitleEdit}>
          <Edit style={{ color: 'var(--grey-color)' }} />
        </CustomIconButton>
      )}
    </div>
  );
};
