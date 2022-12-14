import { useComments } from './useComments';
import { Comment } from './comment/comment';
import { CommentForm } from './comment-form/comment-form';

export const Comments = () => {
  const { comments, isLoading, commentFormRef } = useComments();

  return (
    <div className="section-block" ref={commentFormRef}>
      <CommentForm />
      {isLoading && <div className="loader-container"></div>}
      {!isLoading &&
        comments.map((comment) => <Comment key={comment.id} comment={comment} commentFormRef={commentFormRef} />)}
    </div>
  );
};
