import { CustomIconButton, IconButtonVariant } from '../../../../custom-components/icon-button/icon-button';
import { MoreVert } from '@mui/icons-material';
import React from 'react';
import { useTaskBlockHead } from './useTaskBlockHead';
import { ModalMenuItem } from '../../../../custom-components/menu-item/menu-item';
import { ModalMenu } from '../../../../custom-components/modal-menu/modal-menu';
import { PermissionsContainer } from '../../../../common/components/permissions-container/permissions-container';

export interface TaskBlockHeadProps {
  name: string;
  taskId: number;
}

export const TaskBlockHead = ({ name, taskId }: TaskBlockHeadProps) => {
  const { handleClickSettings, menuList, open, handleClose, anchorEl, permissions } = useTaskBlockHead({
    name,
    taskId
  });

  return (
    <div className="task-block__head">
      <div className="task-block__title">{name}</div>
      <PermissionsContainer needPermission={2} permissions={permissions}>
        <div className="task-block__action">
          <CustomIconButton size="small" variant={IconButtonVariant.icon} onClick={handleClickSettings}>
            <MoreVert fontSize="small" style={{ color: 'var(--dark-icon-color)' }} />
          </CustomIconButton>
        </div>
      </PermissionsContainer>

      <ModalMenu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {menuList.map((item) => (
          <ModalMenuItem key={item.title} {...item} />
        ))}
      </ModalMenu>
    </div>
  );
};
