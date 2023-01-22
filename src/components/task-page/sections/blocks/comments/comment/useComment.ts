import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../../../slices/types';
import { setReplyCommentAction, setSnackbarAction } from '../../../../../../slices/common/common-slice';
import { CommentProps } from './comment';
import { deleteCommentById } from '../../../../../../services/comment-service';

export const useComment = ({ comment, commentFormRef }: CommentProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);

  const handleClickReply = () => {
    dispatch(setReplyCommentAction({ commentId: comment.id, commentText: comment.text }));
    commentFormRef?.current.scrollIntoView();
    document.getElementById('comment-input')?.focus();
  };

  const deleteComment = () => {
    deleteCommentById(comment.id).catch((error) => {
      dispatch(
        setSnackbarAction({
          message: error.response?.data || 'error',
          variant: 'error',
          open: true
        })
      );
    });
  };

  const changeComment = (type: string) => {
    type === 'delete' && deleteComment();
  };

  return {
    user,
    handleClickReply,
    changeComment
  };
};
