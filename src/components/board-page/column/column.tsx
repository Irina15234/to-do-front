import { BoardColumn } from '../../../slices/types';
import './column.css';
import { CustomIconButton, IconButtonVariant } from '../../../custom-components/icon-button/icon-button';
import { AddCircleOutline, MoreVert } from '@mui/icons-material';
import { ModalMenu } from '../../../custom-components/modal-menu/modal-menu';
import React from 'react';
import { isEditPage, isNewPage } from '../../../common/helpers';
import { ModalMenuItem } from '../../../custom-components/menu-item/menu-item';
import { ColumnBody } from './column-body/column-body';
import { useColumn } from './useColumn';
import { PermissionsContainer } from '../../../common/components/permissions-container/permissions-container';

export interface ColumnProps {
  column: BoardColumn;
  columnsAction: { handleEditColumnTitle: (columnId: number) => void; handleDeleteColumn: (columnId: number) => void };
}

export const Column = ({ column, columnsAction }: ColumnProps) => {
  const { handleClickSettings, handleClickAddTask, handleCloseSettings, anchorEl, open, menuList, permissions } =
    useColumn({
      column,
      columnsAction
    });

  return (
    <div className="column">
      <div className="column__title-container">
        <div className="column__title">{column.name}</div>
        {(isEditPage() || isNewPage()) && (
          <CustomIconButton size="small" variant={IconButtonVariant.icon} onClick={handleClickSettings}>
            <MoreVert fontSize="small" style={{ color: 'var(--light-icon-color)' }} />
          </CustomIconButton>
        )}
        {!isEditPage() && !isNewPage() && !column.id && (
          <PermissionsContainer permissions={permissions} needPermission={2}>
            <CustomIconButton size="small" variant={IconButtonVariant.icon} onClick={handleClickAddTask}>
              <AddCircleOutline fontSize="small" style={{ color: 'var(--light-icon-color)' }} />
            </CustomIconButton>
          </PermissionsContainer>
        )}

        <ModalMenu open={open} onClose={handleCloseSettings} anchorEl={anchorEl}>
          {menuList.map((item) => (
            <ModalMenuItem key={item.title} title={item.title} icon={item.icon} onClick={item.onClick} />
          ))}
        </ModalMenu>
      </div>
      <ColumnBody column={column} />
    </div>
  );
};
