import { useDispatch, useSelector } from 'react-redux';
import { State, TaskComment } from '../../../../../../slices/types';
import { setReplyCommentAction } from '../../../../../../slices/common/common-slice';

export const useComment = (comment: TaskComment) => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);

  const handleClickReply = () => {
    dispatch(setReplyCommentAction({ commentId: comment.id, commentText: comment.text }));
  };

  return {
    user,
    handleClickReply
  };
};
