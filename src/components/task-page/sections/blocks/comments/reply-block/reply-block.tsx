import { Close, Reply } from '@mui/icons-material';
import { CustomIconButton, IconButtonVariant } from '../../../../../../custom-components/icon-button/icon-button';
import React from 'react';
import './reply-block.css';
import { useReplyBlock } from './useReplyBlock';

export const ReplyBlock = () => {
  const { replyComment, handleRevertReplyComment } = useReplyBlock();

  return (
    <>
      {replyComment.commentId && (
        <div className="reply-block item-with-bottom-margin">
          <Reply style={{ color: 'var(--grey-color)' }} />
          <span className="reply-block__text">{replyComment.commentText}</span>
          <CustomIconButton variant={IconButtonVariant.icon} size="small" onClick={handleRevertReplyComment}>
            <Close style={{ color: 'var(--grey-color)' }} fontSize="small" />
          </CustomIconButton>
        </div>
      )}
    </>
  );
};
