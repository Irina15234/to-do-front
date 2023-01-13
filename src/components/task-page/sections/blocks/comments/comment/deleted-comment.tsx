import { InfoOutlined } from '@mui/icons-material';

export const DeletedComment = () => {
  return (
    <div className="comment__deleted-body">
      <InfoOutlined style={{ color: 'var(--grey-color)' }} />
      <p>This comment has been deleted.</p>
    </div>
  );
};
