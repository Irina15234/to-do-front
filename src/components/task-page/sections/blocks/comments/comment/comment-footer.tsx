import { ButtonType, CustomButton } from '../../../../../../custom-components/button/button';
import { CustomIconButton, IconButtonVariant } from '../../../../../../custom-components/icon-button/icon-button';
import { MoreVert } from '@mui/icons-material';
import React from 'react';
import { useCommentFooter } from './useCommentFooter';
import { ModalMenuItem } from '../../../../../../custom-components/menu-item/menu-item';
import { ModalMenu } from '../../../../../../custom-components/modal-menu/modal-menu';

export interface CommentFooter {
  handleClickReply: () => void;
  changeComment: (type: string) => void;
}

export const CommentFooter = ({ handleClickReply, changeComment }: CommentFooter) => {
  const { handleClickSettings, handleClose, anchorEl, menuList, open } = useCommentFooter(changeComment);

  return (
    <>
      <div className="comment__footer">
        <CustomButton buttonType={ButtonType.text} fullWidth={false} onClick={handleClickReply}>
          reply
        </CustomButton>
        <CustomIconButton variant={IconButtonVariant.icon} onClick={handleClickSettings}>
          <MoreVert style={{ color: 'var(--button-color)' }} />
        </CustomIconButton>
      </div>
      <ModalMenu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {menuList.map((item) => (
          <ModalMenuItem key={item.title} {...item} />
        ))}
      </ModalMenu>
    </>
  );
};
