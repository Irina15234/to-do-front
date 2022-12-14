import { useComments } from './useComments';
import { Comment } from './comment/comment';
import { CommentForm } from './comment-form/comment-form';

export const Comments = () => {
  const { comments, isLoading } = useComments();

  return (
    <div className="section-block">
      <CommentForm />
      {isLoading && <div className="loader-container"></div>}
      {!isLoading && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
};
