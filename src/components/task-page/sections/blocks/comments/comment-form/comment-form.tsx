import { CustomInput } from '../../../../../../custom-components/input/input';
import React from 'react';
import { ButtonType, CustomButton } from '../../../../../../custom-components/button/button';
import { ReplyBlock } from '../reply-block/reply-block';
import { useCommentForm } from './useCommentForm';

export const CommentForm = () => {
  const { newComment, setNewComment, addComment, revertComment } = useCommentForm();

  return (
    <form className="item-with-bottom-margin">
      <ReplyBlock />
      <CustomInput
        value={newComment}
        label="Comment"
        onChange={(event) => setNewComment(event.target.value)}
        colorVariant="dark"
        fullWidth
        multiline
        minRows={3}
        className="item-with-bottom-margin"
      />
      <div className="form-buttons">
        <CustomButton buttonType={ButtonType.standard} onClick={addComment} disabled={!newComment.length}>
          Save
        </CustomButton>
        <CustomButton buttonType={ButtonType.neutral} onClick={revertComment} disabled={!newComment.length}>
          Revert
        </CustomButton>
      </div>
    </form>
  );
};
