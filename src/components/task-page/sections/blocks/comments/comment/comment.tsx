import { TaskComment } from '../../../../../../slices/types';
import './comment.css';
import React from 'react';
import { formatDate } from '../../../../../../common/helpers';
import { useComment } from './useComment';
import { CommentFooter } from './comment-footer';
import { DeletedComment } from './deleted-comment';
import clsx from 'clsx';
import { CustomAvatar } from '../../../../../../custom-components/avatar/avatar';

export interface CommentProps {
  comment: TaskComment;
  deep?: number;
  commentFormRef: React.MutableRefObject<any>;
}

export const Comment = ({ comment, commentFormRef, deep = 0 }: CommentProps) => {
  const { user, handleClickReply, changeComment } = useComment({ comment, commentFormRef, deep });

  return (
    <>
      <div className={clsx('comment', { comment_deleted: comment.isDeleted })} style={{ marginLeft: 16 * deep }}>
        {comment.isDeleted && <DeletedComment />}
        {!comment.isDeleted && (
          <>
            <div className="comment__head">
              {user.photo && <CustomAvatar alt="" src={user.photo} size="large" type="img" />}
              {!user.photo && (
                <CustomAvatar size="large" type="text">
                  {user?.name?.at(0)}
                </CustomAvatar>
              )}
              <div className="comment__head-info">
                <div className="comment__author">{comment.authorName}</div>
                <div className="comment__date">{formatDate(comment.date)}</div>
              </div>
            </div>
            <div className="comment__body">{comment.text}</div>
            <CommentFooter handleClickReply={handleClickReply} changeComment={changeComment} />
          </>
        )}
      </div>
      {comment.children?.length &&
        comment.children.map((child) => (
          <Comment key={child.id} comment={child} deep={++deep} commentFormRef={commentFormRef} />
        ))}
    </>
  );
};
