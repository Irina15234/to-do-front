import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../../../slices/types';
import { setReplyCommentAction } from '../../../../../../slices/common/common-slice';

export const useReplyBlock = () => {
  const dispatch = useDispatch();
  const replyComment = useSelector((state: State) => state.common.replyComment);

  const handleRevertReplyComment = () => {
    dispatch(setReplyCommentAction({ commentId: null, commentText: '' }));
  };

  return {
    replyComment,
    handleRevertReplyComment
  };
};
