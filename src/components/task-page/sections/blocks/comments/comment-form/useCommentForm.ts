import { useDispatch, useSelector } from 'react-redux';
import { PostComment, State } from '../../../../../../slices/types';
import { useEffect, useState } from 'react';
import { createComment } from '../../../../../../services/comment-service';
import { setReplyCommentAction, setSnackbarAction } from '../../../../../../slices/common/common-slice';

export const useCommentForm = () => {
  const dispatch = useDispatch();
  const task = useSelector((state: State) => state.task);
  const user = useSelector((state: State) => state.user);
  const replyComment = useSelector((state: State) => state.common.replyComment);
  const [newComment, setNewComment] = useState<string>('');

  const permissions = task.permissions || [];

  const addComment = () => {
    const comment: PostComment = {
      text: newComment,
      taskId: task.id,
      authorName: user.name,
      parentId: replyComment.commentId
    };
    createComment(comment)
      .then(() => {
        revertComment();
        dispatch(setReplyCommentAction({ commentId: null, commentText: '' }));
      })
      .catch((error) => {
        dispatch(
          setSnackbarAction({
            message: error.response?.data || 'error',
            variant: 'error',
            open: true
          })
        );
      });
  };

  const revertComment = () => {
    setNewComment('');
  };

  useEffect(() => {
    return () => {
      dispatch(setReplyCommentAction({ commentId: null, commentText: '' }));
    };
  }, [dispatch]);

  const isDisabledComment = !newComment.length || !permissions.includes(2);

  return {
    newComment,
    setNewComment,
    addComment,
    revertComment,
    isDisabledComment
  };
};
