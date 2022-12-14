import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../../../slices/types';
import { setReplyCommentAction } from '../../../../../../slices/common/common-slice';
import { CommentProps } from './comment';

export const useComment = ({ comment, commentFormRef }: CommentProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);

  const handleClickReply = () => {
    dispatch(setReplyCommentAction({ commentId: comment.id, commentText: comment.text }));
    commentFormRef?.current.scrollIntoView();
    document.getElementById('comment-input')?.focus();
  };

  return {
    user,
    handleClickReply
  };
};
