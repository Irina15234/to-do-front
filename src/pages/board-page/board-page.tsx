import { isNewPage } from '../../common/helpers';
import './board-page.css';
import { ColumnsGroup } from '../../components/board-page/columns-group/columns-group';

export const BoardPage = () => {
  return (
    <div className="board-page">
      <div className="board-page__header-container">
        <div className="board-page__title">{isNewPage() ? 'New board' : ''}</div>
      </div>
      <div className="board-page__main">
        <ColumnsGroup
          columns={[
            { id: 0, name: 'to do' },
            { id: 1, name: 'done' }
          ]}
        />
      </div>
    </div>
  );
};
