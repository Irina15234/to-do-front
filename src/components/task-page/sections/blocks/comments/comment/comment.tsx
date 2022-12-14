import { TaskComment } from '../../../../../../slices/types';
import './comment.css';
import { Avatar } from '@mui/material';
import React from 'react';
import { formatDate } from '../../../../../../common/helpers';
import { ButtonType, CustomButton } from '../../../../../../custom-components/button/button';
import { useComment } from './useComment';

interface CommentProps {
  comment: TaskComment;
  deep?: number;
}

export const Comment = ({ comment, deep = 0 }: CommentProps) => {
  const { user, handleClickReply } = useComment(comment);

  return (
    <>
      <div className="comment" style={{ marginLeft: 16 * deep }}>
        <div className="comment__head">
          {user.photo && <Avatar alt="" src={user.photo} />}
          {!user.photo && <Avatar>{user?.name?.at(0)}</Avatar>}
          <div className="comment__head-info">
            <div className="comment__author">{comment.authorName}</div>
            <div className="comment__date">{formatDate(comment.date)}</div>
          </div>
        </div>
        <div className="comment__body">{comment.text}</div>
        <div className="comment__footer">
          <CustomButton buttonType={ButtonType.text} fullWidth={false} onClick={handleClickReply}>
            reply
          </CustomButton>
        </div>
      </div>
      {comment.children?.length &&
        comment.children.map((child) => <Comment key={child.id} comment={child} deep={++deep} />)}
    </>
  );
};
